import { Module } from '@nestjs/common';
import { MidiasService } from './midias.service';
import { MidiasController } from './midias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MidiaSchema } from './interfaces/midias.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Midia', schema: MidiaSchema}])
  ],
  providers: [MidiasService],
  controllers: [MidiasController],
  exports: [MidiasService]
})
export class MidiasModule {}
