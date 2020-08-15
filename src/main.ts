import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 8082

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console
  });
  app.enableCors()
  await app.listen(port);
}
bootstrap();
