import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { News } from './entities/news.entity'
import { CreateNewsInterface, CreateNewsResponseInterface } from './interfaces/create-news.interface'
import { GetNewsResponseInterface } from './interfaces/get-news.interface'
import { FindNewsResponseInterface } from './interfaces/find-news.interface'


@Injectable()
export class NewsService {

  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>
  ) { }

  create(data: CreateNewsInterface):
    Promise<CreateNewsResponseInterface> {
    const news = new News()
    Object.assign(news, data)
    return this.newsRepository.save(news)
  }

  async get(id: number):
    Promise<GetNewsResponseInterface> {
    const news = await this.newsRepository.findOne(id)
    if (news) {
      return news
    } else {
      throw new Error('news not found')
    }
  }

  find(skip: number = 0, take: number = 10):
    Promise<FindNewsResponseInterface[]> {
    const news = this.newsRepository.find({
      select: ['id', 'title', 'excerpt'],
      skip,
      take,
      order: {
        'id': 'DESC'
      }
    })
    return news
  }

  totalCount():
    Promise<number> {
    return this.newsRepository.count()
  }

}
