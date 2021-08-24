import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './common/environment';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module'
import { CategoriasModule } from './categorias/categorias.module'
import { CidadesModule } from './cidades/cidades.module'
import { EstadosModule } from './estados/estados.module'
import { StatusModule } from './status/status.module'
import { TiposModule } from './tipos/tipos.module'
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/roles.guard';
import { ConfigUserModule } from './config-user/config-user.module';
import { EventosModule } from './eventos/eventos.module';
import { TramposModule } from './trampos/trampos.module';
import { AvaliacoesModule } from './avaliacao/avaliacoes.module';
import { MidiasModule } from './midias/midias.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${environment.db.url}/musiclounge-api`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }),
    UsersModule,
    CategoriasModule,
    CidadesModule,
    EstadosModule,
    StatusModule,
    TiposModule,
    AuthModule,
    ConfigUserModule,
    EventosModule,
    TramposModule,
    AvaliacoesModule,
    MidiasModule
  ],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule { }
