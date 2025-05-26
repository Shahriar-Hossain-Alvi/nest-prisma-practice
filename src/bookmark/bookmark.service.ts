import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { EditBookmarkDto } from './dto/edit-bookmark.dto';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  //create bookmark
  create(userId: number, dto: CreateBookmarkDto) {
    return this.prisma.bookmark.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  // find all bookmarks
  findAll(userId: number) {
    return this.prisma.bookmark.findMany({
      where: { userId },
    });
  }

  // find single bookmark
  findOne(userId: number, id: number) {
    return this.prisma.bookmark.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  // update bookmark
  update(userId: number, id: number, dto: EditBookmarkDto) {
    return this.prisma.bookmark.update({
      where: { id },
      data: { ...dto },
    });
  }

  // delete bookmark
  remove(userId: number, id: number) {
    return this.prisma.bookmark.delete({
      where: { id },
    });
  }
}
