import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/moive.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  //   @Get('search')
  //   search(@Query('year') searchingYear: number) {
  //     return `This will return one movie made after: ${searchingYear}`;
  //   }

  @Get(':id') // url에 들어가는 변수와 @Param()안의 변수는 같아야한다.
  getOne(@Param('id') movieId: number): Movie {
    // movieId : 들어올때는 string 이나 main.ts에 설정한 transform 옵션을 통해서 number로 타입이 변경된다.
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    // movieId : 들어올때는 string 이나 main.ts에 설정한 transform 옵션을 통해서 number로 타입이 변경된다.
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    // movieId : 들어올때는 string 이나 main.ts에 설정한 transform 옵션을 통해서 number로 타입이 변경된다.
    return this.moviesService.update(movieId, updateData);
  }
}
