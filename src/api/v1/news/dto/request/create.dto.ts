import { ApiProperty } from '@nestjs/swagger'
import Joi from '../../../../../helpers/joi'

export class CreateBodyDto {
  @ApiProperty()
  readonly title: string = Joi.string().required()

  @ApiProperty({ required: false })
  readonly excerpt?: string = Joi.string()

  @ApiProperty()
  readonly content: string = Joi.string().required()

}

export const CreateBodyValidation = Joi.object(
  new CreateBodyDto()
)