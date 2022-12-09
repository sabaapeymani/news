import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { NewsModule } from './news/news.module'
import { NewsController } from './api/v1/news/news.controller'

@Module({
  imports: [
    DatabaseModule,
    NewsModule
  ],
  controllers: [AppController, NewsController],
  providers: [AppService]
})
export class AppModule { }
