import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as config from 'config'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder()
    .setTitle(config.get('swagger.title'))
    .setDescription('The cats API description')
    .setVersion(config.get('swagger.version'))
    .addTag('news')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)
  await app.listen(config.get('port'))
}
bootstrap()
