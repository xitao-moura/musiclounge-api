import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CidadesController } from './cidades.controller';
import { CidadesService } from './cidades.service';
import { CidadeSchema } from './interfaces/cidades.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Cidade', schema: CidadeSchema}])
  ],
  exports: [CidadesService],
  controllers: [CidadesController],
  providers: [CidadesService]
})
export class CidadesModule {}
