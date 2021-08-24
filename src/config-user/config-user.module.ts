import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigUserController } from './config-user.controller';
import { ConfigUserService } from './config-user.service';
import { ConfigUserSchema } from './interfaces/config-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'ConfigUser', schema: ConfigUserSchema}])
  ],
  exports: [ConfigUserService],
  controllers: [ConfigUserController],
  providers: [ConfigUserService]
})
export class ConfigUserModule {}
