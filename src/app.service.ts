import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Evaluación Inicial de Patrones de Diseño con NestJS';
  }
}

