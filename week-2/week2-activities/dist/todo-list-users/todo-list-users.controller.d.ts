import { TodoListUsersService } from './todo-list-users.service';
import { CreateTodoListUserDto } from './dto/create-todo-list-user.dto';
import { UpdateTodoListUserDto } from './dto/update-todo-list-user.dto';
import { Task } from '@prisma/client';
export declare class TodoListUsersController {
    private readonly todoListUsersService;
    constructor(todoListUsersService: TodoListUsersService);
    create(createTodoListUserDto: CreateTodoListUserDto): Promise<any>;
    findAll(task?: Task): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateTodoListUserDto: UpdateTodoListUserDto): Promise<any>;
    remove(id: string): any;
}
