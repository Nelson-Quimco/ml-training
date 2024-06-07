"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListUsersController = void 0;
const common_1 = require("@nestjs/common");
const todo_list_users_service_1 = require("./todo-list-users.service");
const create_todo_list_user_dto_1 = require("./dto/create-todo-list-user.dto");
const update_todo_list_user_dto_1 = require("./dto/update-todo-list-user.dto");
const client_1 = require("@prisma/client");
let TodoListUsersController = class TodoListUsersController {
    constructor(todoListUsersService) {
        this.todoListUsersService = todoListUsersService;
    }
    create(createTodoListUserDto) {
        return this.todoListUsersService.create(createTodoListUserDto);
    }
    findAll(task) {
        return this.todoListUsersService.findAll();
    }
    findOne(id) {
        return this.todoListUsersService.findOne(+id);
    }
    update(id, updateTodoListUserDto) {
        return this.todoListUsersService.update(+id, updateTodoListUserDto);
    }
    remove(id) {
        return this.todoListUsersService.remove(+id);
    }
};
exports.TodoListUsersController = TodoListUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_list_user_dto_1.CreateTodoListUserDto]),
    __metadata("design:returntype", void 0)
], TodoListUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('task')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoListUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoListUsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_list_user_dto_1.UpdateTodoListUserDto]),
    __metadata("design:returntype", void 0)
], TodoListUsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoListUsersController.prototype, "remove", null);
exports.TodoListUsersController = TodoListUsersController = __decorate([
    (0, common_1.Controller)('todo-list-users'),
    __metadata("design:paramtypes", [todo_list_users_service_1.TodoListUsersService])
], TodoListUsersController);
//# sourceMappingURL=todo-list-users.controller.js.map