import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as config from 'config'

import { News } from '../news/entities/news.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.get('database.host'),
      port: config.get('database.port'),
      username: config.get('database.username'),
      password: config.get('database.password'),
      database: config.get('database.database'),
      synchronize: config.get('database.synchronize'),
      entities: [News]
    })
  ]
})
export class DatabaseModule { }


