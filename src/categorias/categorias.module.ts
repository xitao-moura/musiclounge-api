import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { CategoriaSchema } from './interfaces/categorias.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Categoria', schema: CategoriaSchema}])
  ],
  exports: [CategoriasService],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
