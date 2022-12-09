import { ApiProperty } from '@nestjs/swagger'
import Joi from '../../../../../helpers/joi'

export class GetResponseDto {
  @ApiProperty()
  readonly id: number

  @ApiProperty()
  readonly title: string

  @ApiProperty({ required: false })
  readonly excerpt?: string

  @ApiProperty()
  readonly content: string

  @ApiProperty()
  readonly created: Date

}

