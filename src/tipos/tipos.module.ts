import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TiposController } from './tipos.controller';
import { TiposService } from './tipos.service';
import { TipoSchema } from './interfaces/tipos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Tipo', schema: TipoSchema}])
  ],
  exports: [TiposService],
  controllers: [TiposController],
  providers: [TiposService]
})
export class TiposModule {}
