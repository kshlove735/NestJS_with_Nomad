import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  // npm i class-validator class-transformer
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
