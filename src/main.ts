import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  //   const app = await NestFactory.create(AppModule);
  //   const config = new DocumentBuilder()
  //     .setTitle('NestJS Swagger Example')
  //     .setDescription('The NestJS Swagger API description')
  //     .setVersion('1.0')
  //     // .addTag('nestjs-swagger')
  //     .build();
  //   const document = SwaggerModule.createDocument(app, config);
  //   SwaggerModule.setup('api', app, document);
  //   await app.listen(3000);

  // microservices
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice({
    transport: Transport.TCP,
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
