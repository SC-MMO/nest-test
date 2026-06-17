import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findUser(id: number) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

}
