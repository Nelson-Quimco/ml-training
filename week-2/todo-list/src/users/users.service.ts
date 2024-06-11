import { Injectable, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return this.prismaService.user.create({
        data: createUserDto,
      });
    } catch (error) {
      return error.message;
    }
  }
  async findAll(@Query('task') task?: Task) {
    try {
      if (task)
        return this.prismaService.user.findMany({
          where: {
            task,
          },
        });
      return this.prismaService.user.findMany();
    } catch (error) {
      return error.message;
    }
  }
  async findOne(id: number) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id: id,
        },
      });
      if (user.task === 'DONE') {
        const updateuser = this.prismaService.user.update({
          where: {
            id: id,
          },
          data: {
            isCompleted: true,
          },
        });
        return updateuser;
      }
      return user;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTodoListUserDto: UpdateUserDto) {
    try {
      return await this.prismaService.user.update({
        where: {
          id,
        },
        data: updateTodoListUserDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  remove(id: number) {
    try {
      return this.prismaService.user.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error.message;
    }
  }
}
