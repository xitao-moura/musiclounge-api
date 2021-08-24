import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { StatusSchema } from './interfaces/status.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Status', schema: StatusSchema}])
  ],
  exports: [StatusService],
  controllers: [StatusController],
  providers: [StatusService]
})
export class StatusModule {}
