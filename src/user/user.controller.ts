import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAllUser() {
    return this.userService.findAll();
  }

  @Get(':id')
  findSingleUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: { email?: string; password?: string },
  ) {
    return this.userService.updateUser(id, dto);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  // @Param('id'): Extracts the id from the URL parameters
  //ParseIntPipe: Converts the id (which comes in as a string from the URL) into a number. If it's not a valid number, Nest will throw a 400 Bad Request automatically.
}
