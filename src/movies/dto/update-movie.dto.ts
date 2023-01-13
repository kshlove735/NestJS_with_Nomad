import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// npm i @nestjs/mapped-types
// TODO :  CreateMovieDto를 이용하는 메소드의 경우 해당 class 내의 속성이 표함되지 않으면 오류 발행하지만
// PartialType(CreateMovieDto)으로 이용하는 경우 class 내의 속성을 전부 안보내줘도 되는 이유가 머냐?
export class UpdateMovieDto extends PartialType(CreateMovieDto) { }
