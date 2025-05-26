import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  // didn't added exports PrismaService
})
export class PrismaModule {}
