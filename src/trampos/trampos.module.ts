import { Module } from '@nestjs/common';
import { TramposService } from './trampos.service';
import { TramposController } from './trampos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TrampoSchema } from './interfaces/trampos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Trampo', schema: TrampoSchema}])
  ],
  providers: [TramposService],
  controllers: [TramposController],
  exports: [TramposService]
})
export class TramposModule {}
