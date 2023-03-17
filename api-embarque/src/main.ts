import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TodasExepcionesFiltro } from './common/filtros/http-exception.filtro';
import { TiempoSalidaInterceptor } from './common/interceptores/tiemposalida.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new TodasExepcionesFiltro());

  app.useGlobalInterceptors(new TiempoSalidaInterceptor());

  const options = new DocumentBuilder()
    .setTitle('Vuelos API')
    .setDescription('Calendario de vuelos')
    .setVersion('2.0.0')
    .addTag('vuelos')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs/', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
