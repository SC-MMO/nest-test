import { Controller, Get, Query, ParseIntPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) { }

  @Get()
  async getUsers(
    @Query('id') id?: string,
  ) {
    if (id) {
      return this.usersService.findUser(+id);
    }

    return this.usersService.findAll();
  }

  @Get("/:id")
  async findUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUser(id);
  }
}
