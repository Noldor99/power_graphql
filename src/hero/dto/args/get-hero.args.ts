import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetHeroArgs {
  @Field()
  @IsNotEmpty()
  heroId: number;
}
