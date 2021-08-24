import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from "fs";

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

async function bootstrap() {
  const httpsOptions = {
    //key: fs.readFileSync('/etc/letsencrypt/live/musiclounge-api.musiclounge.com.br/privkey.pem'),
    //cert: fs.readFileSync('/etc/letsencrypt/live/musiclounge-api.musiclounge.com.br/fullchain.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('MusicLounge Api')
    .setDescription('MusicLounge api descrição')
    .setVersion('1.0')
    .addTag('MusicLounge')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  let listener = await app.listen(3000, '127.0.0.1', () => {
    console.log(listener.address().address)
    console.log(listener.address().port)
  });
}
bootstrap();