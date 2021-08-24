import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstadosController } from './estados.controller';
import { EstadosService } from './estados.service';
import { EstadoSchema } from './interfaces/estados.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Estado', schema: EstadoSchema}])
  ],
  exports: [EstadosService],
  controllers: [EstadosController],
  providers: [EstadosService]
})
export class EstadosModule {}
