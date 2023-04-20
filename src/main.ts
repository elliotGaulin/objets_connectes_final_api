import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions: {
  //     key: fs.readFileSync('./src/secrets/key.pem'),
  //     cert: fs.readFileSync('./src/secrets/cert.pem'),
  //   },

  // });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
