import { ApiProperty } from '@nestjs/swagger'
import Joi from '../../../../../helpers/joi'

export class CreateResponseDto {
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

