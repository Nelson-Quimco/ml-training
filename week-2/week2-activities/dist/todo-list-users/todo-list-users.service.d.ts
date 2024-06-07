import { CreateTodoListUserDto } from './dto/create-todo-list-user.dto';
import { UpdateTodoListUserDto } from './dto/update-todo-list-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
export declare class TodoListUsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createTodoListUserDto: CreateTodoListUserDto): Promise<any>;
    findAll(task?: Task): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateTodoListUserDto: UpdateTodoListUserDto): Promise<any>;
    remove(id: number): any;
}
