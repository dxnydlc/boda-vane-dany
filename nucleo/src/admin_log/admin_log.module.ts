import { Module } from '@nestjs/common';
import { AdminLogService } from './admin_log.service';
import { AdminLogController } from './admin_log.controller';

@Module({
  controllers: [AdminLogController],
  providers: [AdminLogService],
})
export class AdminLogModule {}
