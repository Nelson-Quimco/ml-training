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
exports.TodoListUsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let TodoListUsersService = class TodoListUsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createTodoListUserDto) {
        try {
            return this.prismaService.user.create({
                data: createTodoListUserDto,
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async findAll(task) {
        try {
            if (task)
                return this.prismaService.user.findMany({
                    where: {
                        task,
                    },
                });
            return this.prismaService.user.findMany();
        }
        catch (error) {
            return error.message;
        }
    }
    async findOne(id) {
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
        }
        catch (error) {
            return error.message;
        }
    }
    async update(id, updateTodoListUserDto) {
        try {
            return await this.prismaService.user.update({
                where: {
                    id,
                },
                data: updateTodoListUserDto,
            });
        }
        catch (error) {
            return error.message;
        }
    }
    remove(id) {
        try {
            return this.prismaService.user.delete({
                where: {
                    id: id,
                },
            });
        }
        catch (error) {
            return error.message;
        }
    }
};
exports.TodoListUsersService = TodoListUsersService;
__decorate([
    __param(0, (0, common_1.Query)('task')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoListUsersService.prototype, "findAll", null);
exports.TodoListUsersService = TodoListUsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoListUsersService);
//# sourceMappingURL=todo-list-users.service.js.map