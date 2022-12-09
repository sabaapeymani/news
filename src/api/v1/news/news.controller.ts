import { Controller, Get, Post, Body, Param, Query, UseGuards, UsePipes, NotFoundException } from '@nestjs/common'
import { ApiTags, ApiBearerAuth, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger'
import { NewsService } from '../../../news/news.service'
import { AdminGuard } from '../../../guards/admin.guard'
import { CreateBodyValidation, CreateBodyDto } from './dto/request/create.dto'
import { JoiValidationPipe } from '../../../joi-validation.pipe'
import { CreateResponseDto } from './dto/response/create.dto'
import { GetParamValidation, GetParamDto } from './dto/request/get.dto'
import { GetResponseDto } from './dto/response/get.dto'
import { FindQueryValidation, FindQueryDto } from './dto/request/find.dto'
import { FindResponseDto } from './dto/response/find.dto'

@Controller('api/v1/news')
@ApiTags('News')
export class NewsController {
  constructor(
    private readonly newsService: NewsService
  ) { }


  @Post()
  @UseGuards(AdminGuard)
  @UsePipes(
    new JoiValidationPipe({ body: CreateBodyValidation })
  )
  @ApiOkResponse({ type: CreateResponseDto })
  @ApiBearerAuth()
  @ApiBadRequestResponse({})
  create(@Body() body: CreateBodyDto) {
    return this.newsService.create(body)
  }

  @Get('/:id')
  @UsePipes(
    new JoiValidationPipe({ body: GetParamValidation })
  )
  @ApiOkResponse({ type: GetResponseDto })
  @ApiNotFoundResponse({})
  async get(@Param() params: GetParamDto) {
    const { id } = params
    try {
      return await this.newsService.get(id)
    } catch (error) {
      throw new NotFoundException('news not found')
    }
  }

  @Get()
  @UsePipes(
    new JoiValidationPipe({ body: FindQueryValidation })
  )
  @ApiOkResponse({ type: FindResponseDto })
  @ApiNotFoundResponse({})
  async find(@Query() query: FindQueryDto) {
    const { page = 1, count = 10 } = query
    const skip = (page - 1) * count
    const [news, total] = await Promise.all([
      this.newsService.find(skip, count),
      this.newsService.totalCount()
    ])
    return {
      news,
      total
    }
  }
}
