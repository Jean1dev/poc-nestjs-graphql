import { Module } from '@nestjs/common';
import { RoteirizacaoResolver } from './roteirizacao.resolver';

@Module({
  providers: [RoteirizacaoResolver]
})
export class RoteirizacaoModule {}
