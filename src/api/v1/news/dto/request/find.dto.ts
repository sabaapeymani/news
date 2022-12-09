import { ApiProperty } from '@nestjs/swagger'
import Joi from '../../../../../helpers/joi'

export class FindQueryDto {
  @ApiProperty()
  readonly page?: number = Joi.number()

  @ApiProperty()
  readonly count?: number = Joi.number()
}

export const FindQueryValidation = Joi.object(
  new FindQueryDto()
)