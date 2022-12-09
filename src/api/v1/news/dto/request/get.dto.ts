import { ApiProperty } from '@nestjs/swagger'
import Joi from '../../../../../helpers/joi'

export class GetParamDto {
  @ApiProperty()
  readonly id: number = Joi.number().required()
}

export const GetParamValidation = Joi.object(
  new GetParamDto()
)