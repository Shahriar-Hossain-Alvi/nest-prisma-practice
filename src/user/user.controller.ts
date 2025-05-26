import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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

  // @Param('id'): Extracts the id from the URL parameters
  //ParseIntPipe: Converts the id (which comes in as a string from the URL) into a number. If it's not a valid number, Nest will throw a 400 Bad Request automatically.
}
