"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodoListUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_todo_list_user_dto_1 = require("./create-todo-list-user.dto");
class UpdateTodoListUserDto extends (0, mapped_types_1.PartialType)(create_todo_list_user_dto_1.CreateTodoListUserDto) {
}
exports.UpdateTodoListUserDto = UpdateTodoListUserDto;
//# sourceMappingURL=update-todo-list-user.dto.js.map