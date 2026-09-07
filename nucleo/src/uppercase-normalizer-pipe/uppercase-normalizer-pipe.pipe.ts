import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercaseNormalizerPipePipe implements PipeTransform {
  transform(value: any) {
    return this.normalizeDeep(value);
  }

  private normalizeDeep(input: any): any {
    if (typeof input === 'string') {
      return this.normalizeString(input);
    }

    if (Array.isArray(input)) {
      return input.map(v => this.normalizeDeep(v));
    }

    if (typeof input === 'object' && input !== null) {
      const output = {};
      for (const key of Object.keys(input)) {
        output[key] = this.normalizeDeep(input[key]);
      }
      return output;
    }

    return input;
  }

  private normalizeString(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .toUpperCase();
  }
}
