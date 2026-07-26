import { Injectable } from '@nestjs/common';
import { CreateUtilidadeDto } from './dto/create-utilidade.dto';
import { UpdateUtilidadeDto } from './dto/update-utilidade.dto';



const path            = require('path'); // Módulo nativo de Node.js
const fs              = require('fs');     // Módulo nativo para sistema de archivos

import { access } from 'fs/promises';
import { constants } from 'fs';

import { readFileSync, writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';
const execShPromise   = require("exec-sh").promise;

const moment          = require('moment');



@Injectable()
export class UtilidadesService {
  // ...........................................................
  // ...........................................................
  constructor(
    private readonly jwtService: JwtService,
  ) { }
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  async checkFile(path) {
    try {
      // F_OK checks if the file is visible to the process
      await access(path, constants.F_OK);
      console.log('File exists');
      return true;
    } catch {
      console.log('File does not exist');
      return false;
    }
  }
  // ...........................................................
  // ...........................................................
  async calcularTardanza( horaProgramadaStr , horaRealStr )
  {
    const horaProgramada = moment(horaProgramadaStr, "HH:mm");
    const horaReal = moment(horaRealStr, "HH:mm");

    // Si llegó temprano o puntual → no hay tardanza
    if (!horaReal.isAfter(horaProgramada)) {
      return {
        horas: 0,
        minutos: 0,
        text: "00:00"
      };
    }

    // Diferencia en minutos
    const diffMin = horaReal.diff(horaProgramada, "minutes");

    const horas = Math.floor(diffMin / 60);
    const minutos = diffMin % 60;

    const text = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;

    return {
      horas,
      minutos,
      text
    };
    // calcularTardanza("08:30", "08:37");
    /**
     * {
        "horas"   : 0,
        "minutos" : 7,
        "text"    : "00:07"
      }
     */
  }
  // ...........................................................
  async calcularDiferenciaHoras( inicioStr , finStr )
  {
    const inicio      = moment(inicioStr, "HH:mm");
    const fin         = moment(finStr, "HH:mm");

    // Si fin es menor o igual → diferencia 0
    if (!fin.isAfter(inicio)) {
      return {
        horas     : 0,
        minutos   : 0,
        text      : "00:00"
      };
    }

    const diffMin = fin.diff(inicio, "minutes");

    const horas = Math.floor(diffMin / 60);
    const minutos = diffMin % 60;

    const text = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;

    return {
      horas,
      minutos,
      text
    };
  }
  // ...........................................................
  async calcularHoraSalida24hConPausa(horaInicioStr, jornadaHM, pausaHM) {
    const inicio = moment(horaInicioStr, "YYYY-MM-DD HH:mm");

    const [jh, jm] = jornadaHM.split(":").map(Number);
    const jornadaMin = jh * 60 + jm;

    const [ph, pm] = pausaHM.split(":").map(Number);
    const pausaMin = ph * 60 + pm;

    const totalMin = jornadaMin + pausaMin;

    const salida = inicio.clone().add(totalMin, "minutes");

    return salida.format("YYYY-MM-DD HH:mm");
}

  /*async calcularHoraSalida24hConPausa(horaInicio, jornadaHM, pausaHM) {
    const inicio = moment(horaInicio, "HH:mm");

    const [jh, jm] = jornadaHM.split(":").map(Number);
    const jornadaMin = jh * 60 + jm;

    const [ph, pm] = pausaHM.split(":").map(Number);
    const pausaMin = ph * 60 + pm;

    const totalMin = jornadaMin + pausaMin;

    const salida = inicio.clone().add(totalMin, "minutes");

    return salida.format("HH:mm");
  }*/
  // ...........................................................
  // ...........................................................
  async diferenciaFechasConResta(f1, f2, restaHM) {
    const inicio = moment(f1, "YYYY-MM-DD HH:mm");
    const fin = moment(f2, "YYYY-MM-DD HH:mm");

    // Diferencia total en minutos
    let diffMin = fin.diff(inicio, "minutes");

    // Convertir la resta "HH:mm" a minutos
    const [rh, rm] = restaHM.split(":").map(Number);
    const restaTotal = rh * 60 + rm;

    // Aplicar la resta
    diffMin -= restaTotal;

    // Evitar valores negativos
    if (diffMin < 0) diffMin = 0;

    const horas = Math.floor(diffMin / 60);
    const minutos = diffMin % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
  }
  // ...........................................................
  // ...........................................................
  async calcularHorasExtrasDesdeHoraBase(horaBaseStr, horaFinStr) {
    // Parsear fechas con moment
    const base = moment(horaBaseStr, "YYYY-MM-DD HH:mm");
    const fin = moment(horaFinStr, "YYYY-MM-DD HH:mm");

    // Validación: fin debe ser mayor que base
    if (!fin.isAfter(base)) {
      return {
        error               : `La hora de fin debe ser mayor que la hora base. ${base} -> fin -> ${fin}` ,
        porcentaje25        : { horas: 0, minutos: 0, text: "00:00" },
        porcentaje35        : { horas: 0, minutos: 0, text: "00:00" },
        porcentaje25Decimal : 0,
        porcentaje35Decimal : 0,
        totalDecimal        : 0,
        totalText           : "00:00"
      };
    }

    // Diferencia total en minutos
    const totalMin = fin.diff(base, "minutes");

    // Convertir a HH:mm
    const horas = Math.floor(totalMin / 60);
    const minutos = totalMin % 60;

    const tiempoHHMM = moment()
      .startOf("day")
      .add(horas, "hours")
      .add(minutos, "minutes")
      .format("HH:mm");

      //varDump( tiempoHHMM );
    // Reutilizar tu función existente
    return await this.calcularHorasExtras(tiempoHHMM);
    /**
     * calcularHorasExtrasDesdeHoraBase(
        "2026-05-29 16:00",
        "2026-05-29 18:16"
      );
      {
        "porcentaje25": {
          "horas": 2,
          "minutos": 0,
          "text": "02:00"
        },
        "porcentaje35": {
          "horas": 0,
          "minutos": 16,
          "text": "00:16"
        },
        "porcentaje25Decimal": 2.00,
        "porcentaje35Decimal": 0.27,
        "totalDecimal": 2.27,
        "totalText": "02:16"
      }
     */
  }
  // ...................................................................
  // ...........................................................
  async calcularHorasExtras(horasStr) {
    // Parsear "HH:mm"
    const [h, m] = horasStr.split(":").map(Number);

    // Convertir a minutos (ahora esto YA ES horas extra)
    const extraMin = h * 60 + m;

    // Si no hay extras
    if (extraMin <= 0) {
      return {
        porcentaje25: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje35: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje25Decimal: 0,
        porcentaje35Decimal: 0,
        totalDecimal: 0,
        totalText: "00:00"
      };
    }

    // Límites legales
    const limite25 = 2 * 60; // 2 horas = 120 min

    // Cálculo de minutos por tramo
    const min25 = Math.min(extraMin, limite25);
    const min35 = Math.max(extraMin - limite25, 0);

    // Conversión HH:mm
    const horas25 = Math.floor(min25 / 60);
    const minutos25 = min25 % 60;

    const horas35 = Math.floor(min35 / 60);
    const minutos35 = min35 % 60;

    // Formato texto HH:MM
    const text25 = `${String(horas25).padStart(2, "0")}:${String(minutos25).padStart(2, "0")}`;
    const text35 = `${String(horas35).padStart(2, "0")}:${String(minutos35).padStart(2, "0")}`;

    // Conversión decimal
    const porcentaje25Decimal = +(min25 / 60).toFixed(2);
    const porcentaje35Decimal = +(min35 / 60).toFixed(2);

    // Total en horas decimales
    const totalDecimal = +(porcentaje25Decimal + porcentaje35Decimal).toFixed(2);

    // Total HH:MM
    const totalHoras = Math.floor(extraMin / 60);
    const totalMinutos = extraMin % 60;
    const totalText = `${String(totalHoras).padStart(2, "0")}:${String(totalMinutos).padStart(2, "0")}`;

    return {
      porcentaje25: { horas: horas25, minutos: minutos25, text: text25 },
      porcentaje35: { horas: horas35, minutos: minutos35, text: text35 },
      porcentaje25Decimal,
      porcentaje35Decimal,
      totalDecimal,
      totalText
    };
  }
  // ...........................................................
  // ...........................................................
  async sumarHorasYMinutos2(h1, h2) {
    const [h1h, h1m] = h1.split(":").map(Number);
    const [h2h, h2m] = h2.split(":").map(Number);

    const totalMin = (h1h * 60 + h1m) + (h2h * 60 + h2m);

    const horas = Math.floor(totalMin / 60);
    const minutos = totalMin % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
  }
  // ...........................................................
  // ...........................................................
  async calcularHorasExtrasDesde8( horasStr ) {
    // Parsear "HH:mm"
    const [h, m] = horasStr.split(":").map(Number);

    // Convertir a minutos
    const totalMin = h * 60 + m;

    // Jornada laboral estándar en Perú: 8 horas
    const jornadaMin = 8 * 60;

    // Si no supera las 8 horas, no hay extras
    if (totalMin <= jornadaMin) {
      return {
        porcentaje25: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje35: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje25Decimal: 0,
        porcentaje35Decimal: 0,
        totalDecimal: 0,
        totalText: "00:00"
      };
    }

    // Minutos extra reales
    const extraMin = totalMin - jornadaMin;

    // Límites legales
    const limite25 = 2 * 60; // 2 horas = 120 min

    // Cálculo
    const min25 = Math.min(extraMin, limite25);
    const min35 = Math.max(extraMin - limite25, 0);

    // Conversión HH:mm
    const horas25 = Math.floor(min25 / 60);
    const minutos25 = min25 % 60;

    const horas35 = Math.floor(min35 / 60);
    const minutos35 = min35 % 60;

    // Formato texto HH:MM
    const text25 = `${String(horas25).padStart(2, "0")}:${String(minutos25).padStart(2, "0")}`;
    const text35 = `${String(horas35).padStart(2, "0")}:${String(minutos35).padStart(2, "0")}`;

    // Conversión decimal
    const porcentaje25Decimal = +(min25 / 60).toFixed(2);
    const porcentaje35Decimal = +(min35 / 60).toFixed(2);

    // Total en horas decimales
    const totalDecimal = +(porcentaje25Decimal + porcentaje35Decimal).toFixed(2);

    // Total HH:MM
    const totalHoras = Math.floor((min25 + min35) / 60);
    const totalMinutos = (min25 + min35) % 60;
    const totalText = `${String(totalHoras).padStart(2, "0")}:${String(totalMinutos).padStart(2, "0")}`;

    return {
      porcentaje25: { horas: horas25, minutos: minutos25, text: text25 },
      porcentaje35: { horas: horas35, minutos: minutos35, text: text35 },
      porcentaje25Decimal,
      porcentaje35Decimal,
      totalDecimal,
      totalText
    };
  }

  // ...........................................................
  // ...........................................................
  async calcularHorasExtrasAvanzado(entradaStr, salidaStr, refrigerioStr) {
    // Parsear fechas con moment
    const entrada = moment(entradaStr, "YYYY-MM-DD HH:mm");
    const salida = moment(salidaStr, "YYYY-MM-DD HH:mm");

    // Validación: salida antes de entrada
    if (!salida.isAfter(entrada)) {
      return {
        error: "La hora de salida debe ser mayor que la hora de entrada.",
        porcentaje25: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje35: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje25Decimal: 0,
        porcentaje35Decimal: 0,
        totalDecimal: 0,
        totalText: "00:00"
      };
    }

    // Diferencia total en minutos
    let totalMin = salida.diff(entrada, "minutes");

    // Restar refrigerio
    const [rh, rm] = refrigerioStr.split(":").map(Number);
    const refrigerioMin = rh * 60 + rm;

    totalMin -= refrigerioMin;

    // Validación: refrigerio mayor al tiempo trabajado
    if (totalMin <= 0) {
      return {
        error: "El refrigerio es mayor o igual al tiempo trabajado.",
        porcentaje25: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje35: { horas: 0, minutos: 0, text: "00:00" },
        porcentaje25Decimal: 0,
        porcentaje35Decimal: 0,
        totalDecimal: 0,
        totalText: "00:00"
      };
    }

    // Convertir minutos a HH:mm
    const horas = Math.floor(totalMin / 60);
    const minutos = totalMin % 60;

    const tiempoTrabajadoHHMM = moment()
      .startOf("day")
      .add(horas, "hours")
      .add(minutos, "minutes")
      .format("HH:mm");

    // Reutilizar tu función existente
    return await this.calcularHorasExtrasDesde8(tiempoTrabajadoHHMM);
  }

  // ...........................................................
  // ...........................................................
  async sumarTiempoAFecha(fechaStr, tiempoStr) {
    const fecha = moment(fechaStr, "YYYY-MM-DD HH:mm");

    const [h, m] = tiempoStr.split(":").map(Number);

    const nuevaFecha = fecha
      .clone()
      .add(h, "hours")
      .add(m, "minutes")
      .format("YYYY-MM-DD HH:mm");

    return nuevaFecha;
    // sumarTiempoAFecha("2026-05-29 13:05", "08:00");
  }
  // ...........................................................
  // ...........................................................
  async obtenerDiaAbreviado(fechaStr) {
    const fecha = moment(fechaStr, "YYYY-MM-DD HH:mm");

    // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const indice = fecha.day();

    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

    return dias[indice];
  }
  // ...........................................................
  // ...........................................................
  async convertirHoraDecimal(horaStr) {
    const [h, m] = horaStr.split(":").map(Number);
    const decimal = h + (m / 60);
    return +decimal.toFixed(2); // redondeado a 2 decimales
  }
  // ...........................................................
  // ...........................................................
  async diferenciaFechaHMDecimal(f1, f2) {
    const inicio = moment(f1, "YYYY-MM-DD HH:mm:ss");
    const fin = moment(f2, "YYYY-MM-DD HH:mm");

    const diffMin = fin.diff(inicio, "minutes"); // diferencia total en minutos

    const horas = Math.floor(diffMin / 60);
    const minutos = diffMin % 60;

    const hhmm = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;

    const decimal = +(horas + minutos / 60).toFixed(2);

    return { hhmm, decimal };
    // diferenciaFechaHMDecimal("2026-05-22 05:55:00", "2026-05-22 14:55");
  }
  // ...........................................................
  // ...........................................................
  async diferenciaFechaHMDecimalConResta( f1 , f2 , restaHM )
  {
    const inicio = moment(f1, "YYYY-MM-DD HH:mm:ss");
    const fin = moment(f2, "YYYY-MM-DD HH:mm");

    // diferencia total en minutos
    let diffMin = fin.diff(inicio, "minutes");

    // convertir HH:MM a minutos para restar
    const [rh, rm] = restaHM.split(":").map(Number);
    const restaMin = rh * 60 + rm;

    // restar minutos
    diffMin -= restaMin;

    // reconstruir HH:MM
    const horas = Math.floor(diffMin / 60);
    const minutos = diffMin % 60;

    const hhmm = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;

    // decimal
    const decimal = +(horas + minutos / 60).toFixed(2);

    return { hhmm, decimal };
    /**
     * diferenciaFechaHMDecimalConResta(
        "2026-05-22 05:55:00",
        "2026-05-22 14:55",
        "01:00" // 1 hora de refrigerio, por ejemplo
      );
     */
  }
  // ...........................................................
  // ...........................................................
  async calcularHorasExtras02(horasExtraStr) {
      // 1. Parsear las horas extras totales
      const duracionTotal = moment.duration(horasExtraStr);
      const minutosTotales = duracionTotal.asMinutes();
      
      // 2. Definir el límite de las 2 primeras horas (120 minutos)
      const LIMITE_25_MINS = 120;
      
      let mins25 = 0;
      let mins35 = 0;
      
      if (minutosTotales > LIMITE_25_MINS) {
          mins25 = LIMITE_25_MINS;
          mins35 = minutosTotales - LIMITE_25_MINS;
      } else {
          mins25 = minutosTotales;
          mins35 = 0;
      }
      
      // 3. Helper para formatear a HH:MM (gestionando más de 24h si fuera necesario)
      const formatHHMM = (minutos) => {
          const h = Math.floor(minutos / 60);
          const m = minutos % 60;
          return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      };

      // 4. Helper para convertir a decimal (redondeado a 2 decimales)
      const formatDecimal = (minutos) => {
          return parseFloat((minutos / 60).toFixed(2));
      };
      
      return {
          horas25: formatHHMM(mins25),
          horas25Decimal: formatDecimal(mins25),
          horas35: formatHHMM(mins35),
          horas35Decimal: formatDecimal(mins35)
      };
      /**
       * // --- Ejemplo de uso ---
       * const resultado = calcularHorasExtras("06:23");
       * console.log(resultado);
       */
  }
  // ...........................................................
  // ...........................................................
  async calcularAsistencia(fechaHoraInicio, fechaHoraFin, horasJornadaStr) {
    const inicio = moment(fechaHoraInicio);
    const fin = moment(fechaHoraFin);
    
    // 1. Minutos totales y horas extras
    const minutosTrabajados = fin.diff(inicio, 'minutes');
    const minutosJornadaBase = moment.duration(horasJornadaStr).asMinutes();
    const minutosExtrasTotales = Math.max(0, minutosTrabajados - minutosJornadaBase);
    
    const LIMITE_25_MINS = 120;
    let mins25 = 0;
    let mins35 = 0;
    
    if (minutosExtrasTotales > LIMITE_25_MINS) {
        mins25 = LIMITE_25_MINS;
        mins35 = minutosExtrasTotales - LIMITE_25_MINS;
    } else {
        mins25 = minutosExtrasTotales;
        mins35 = 0;
    }

    // 2. Cálculo de horas nocturnas (22:00 a 06:00)
    // Se itera por minuto para máxima precisión cruzando la medianoche
    let minutosNocturnos = 0;
    let cursorTiempo = inicio.clone();
    
    while (cursorTiempo.isBefore(fin)) {
        const horaActual = cursorTiempo.hour();
        // Condición de horario nocturno: de 22:00 a 05:59
        if (horaActual >= 22 || horaActual < 6) {
            minutosNocturnos++;
        }
        cursorTiempo.add(1, 'minutes');
    }
    
    // 3. Formateadores
    const formatHHMM = (minutos) => {
        const h = Math.floor(minutos / 60);
        const m = minutos % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    };

    const formatDecimal = (minutos) => {
        return parseFloat((minutos / 60).toFixed(2));
    };
    
    return {
        horasTotales          : formatHHMM(minutosExtrasTotales),
        horasTotalesDecimal   : formatDecimal(minutosExtrasTotales),
        horas25               : formatHHMM(mins25),
        horas25Decimal        : formatDecimal(mins25),
        horas35               : formatHHMM(mins35),
        horas35Decimal        : formatDecimal(mins35),
        horasNocturnas        : formatHHMM(minutosNocturnos),
        horasNocturnasDecimal : formatDecimal(minutosNocturnos)
    };
    /**
     * --- Ejemplo de uso ---
     * Turno de 14:00 a 23:00 (9 horas totales). Jornada: 8h.
     * Tiene 1 hora extra y 1 hora nocturna (de 22:00 a 23:00).
     * const resultado = calcularAsistencia(
      * "2026-06-22 14:00:00", 
      * "2026-06-22 23:00:00", 
      * "08:00"
     * );
     * console.log(resultado);
     */
  }
  // ...........................................................
  // ...........................................................
  /**
  async leerExcel( path : string ) {
    
    try {

      let _URL_PROYECTO   = process.env.URL_PROYECTO;
      let ruta            = `${_URL_PROYECTO}public/${path}`;
      
      const workbook = XLSX.readFile( ruta );

      // Tomar la primera hoja
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convertir a JSON
      const data = XLSX.utils.sheet_to_json(sheet, {
        defval  : null, // evita undefined
        raw     : true,
        header  : 1,    // devuelve filas como arrays
      });

      return data;

    } catch (error) {

      varDump( error );
      throw new HttpException( error , HttpStatus.CONFLICT );

    }

  }
  /**/
  // ...........................................................
  // ...........................................................
  // src/common/helpers/array.helper.ts
  // src/common/helpers/array.helper.ts
  async  chunkArray<T>(arr: T[], size: number): Promise<T[][]> {
    const chunks: T[][] = [];

    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
      await Promise.resolve(); // permite yield del event loop
    }

    return chunks;
  }
  // ...........................................................
  // ...........................................................
  // src/common/helpers/dni-compare.helper.ts
  async compareDniLists(dniExcel: string[], dniDB: string[]) {
    const excelSet = new Set(dniExcel);
    const dbSet = new Set(dniDB);

    const encontrados = dniDB.filter(d => excelSet.has(d));
    const faltantes = dniExcel.filter(d => !dbSet.has(d));

    return { encontrados, faltantes };
  }
  // ...........................................................
  // ...........................................................
  async obtenerLunesDomingoSemana(semana, anio) {
    const lunes   = moment().year(anio).isoWeek(semana).isoWeekday(1);
    const domingo = moment().year(anio).isoWeek(semana).isoWeekday(7);

    return {
      lunes : lunes,//.format("YYYY-MM-DD"),
      domingo: domingo//.format("YYYY-MM-DD")
    };
  }
  // ...........................................................
  // ...........................................................
  async addZeros(number, length) {
    //
    var my_string = '' + number;
    while (my_string.length < length) {
      my_string = '0' + my_string;
    }
    return my_string;
  }
  // ...........................................................
  // ...........................................................
  async decodificaToken(uuid) {

    let dataT = this.jwtService.decode(uuid);

    return dataT;
  }
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
  // ...........................................................
}
const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// ...................................................................
function varDump( e ){
  console.log( e );
}
// ...................................................................
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// ...................................................................
function Dump1( e , color )
{
  // rojo, verde, amarillo, negrita_verde, negrita_verde_u
  switch ( color ) {
    case 'rojo':
      console.log(  e.red );
    break;
    case 'verde':
      console.log(  e.green );
    break;
    case 'amarillo':
      console.log(  e.yellow );
    break;
    case 'negrita_verde':
      console.log(  e.green );
    break;
    case 'negrita_verde_u':
      console.log(  e.green.bold );
    break;
    default:
      //
    break;
  }
}
// ..............................................................................