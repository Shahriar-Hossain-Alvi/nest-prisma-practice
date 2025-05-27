import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { EditBookmarkDto } from './dto/edit-bookmark.dto';
import { Bookmark } from '@prisma/client';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  //create bookmark
  async create(userId: number, dto: CreateBookmarkDto): Promise<Bookmark> {
    return await this.prisma.bookmark.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  // find all bookmarks of a user
  async findAll(userId: number): Promise<Bookmark[]> {
    return await this.prisma.bookmark.findMany({
      where: { userId },
    });
  }

  // find single bookmark
  async findOne(userId: number, id: number): Promise<Bookmark | null> {
    return await this.prisma.bookmark.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  // update bookmark
  async update(
    userId: number,
    id: number,
    dto: EditBookmarkDto,
  ): Promise<Bookmark> {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: {
        id_userId: { id, userId },
      },
    });

    if (!bookmark) {
      throw new ForbiddenException('Bookmark not found');
    }

    return this.prisma.bookmark.update({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
      data: { ...dto },
    });
  }

  // delete bookmark
  async remove(userId: number, id: number): Promise<Bookmark> {
    const bookmark = await this.prisma.bookmark.findUnique({
      where: {
        id_userId: { id, userId },
      },
    });

    if (!bookmark) {
      throw new ForbiddenException('Bookmark not found');
    }

    return await this.prisma.bookmark.delete({
      where: {
        id_userId: {
          id,
          userId,
        },
      },
    });
  }
}
