import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

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
}
