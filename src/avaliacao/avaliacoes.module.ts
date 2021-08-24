import { Module } from '@nestjs/common';
import { AvaliacoesService } from './avaliacoes.service';
import { AvaliacoesController } from './avaliacoes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AvaliacaoSchema } from './interfaces/avaliacoes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Avaliacao', schema: AvaliacaoSchema}])
  ],
  providers: [AvaliacoesService],
  controllers: [AvaliacoesController],
  exports: [AvaliacoesService]
})
export class AvaliacoesModule {}
