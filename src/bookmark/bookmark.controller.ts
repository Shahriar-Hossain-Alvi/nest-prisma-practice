import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { EditBookmarkDto } from './dto/edit-bookmark.dto';

@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  // create
  @Post(':userId')
  createBookmark(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.create(userId, dto);
  }

  // get all bookmark
  @Get(':userId')
  findAllBookmarkOfAUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.bookmarkService.findAll(userId);
  }

  // update bookmark
  @Patch(':userId/:id')
  updateABookmark(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.bookmarkService.update(userId, id, dto);
  }
}
