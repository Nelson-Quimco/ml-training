"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContactListDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_contact_list_dto_1 = require("./create-contact-list.dto");
class UpdateContactListDto extends (0, mapped_types_1.PartialType)(create_contact_list_dto_1.CreateContactListDto) {
}
exports.UpdateContactListDto = UpdateContactListDto;
//# sourceMappingURL=update-contact-list.dto.js.map