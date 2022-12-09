import { ApiProperty } from '@nestjs/swagger'

class NewsDto {
  @ApiProperty()
  readonly id: number

  @ApiProperty()
  readonly title: string

  @ApiProperty({ required: false })
  readonly excerpt?: string

  @ApiProperty()
  readonly created: Date
}

export class FindResponseDto {
  @ApiProperty({ isArray: true, type: NewsDto })
  news: NewsDto[]

  @ApiProperty()
  total: number
}

