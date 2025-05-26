import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

//Prisma doesn’t support a direct "exclude" option — so you just select everything you want, not what you don’t want.

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // get all users
  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
    });
  }

  //   find single user
  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
      },
    });
  }

  // update user
  updateUser(id: number, dto: { email?: string; password?: string }) {
    return this.prisma.user.update({
      where: { id },
      data: dto,
      select: {
        id: true,
        email: true,
      },
    });
  }

  // delete user
  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
      select: {
        id: true,
        email: true,
      },
    });
  }
}
