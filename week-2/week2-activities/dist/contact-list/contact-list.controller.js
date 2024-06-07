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
exports.ContactListController = void 0;
const common_1 = require("@nestjs/common");
const contact_list_service_1 = require("./contact-list.service");
const create_contact_list_dto_1 = require("./dto/create-contact-list.dto");
const update_contact_list_dto_1 = require("./dto/update-contact-list.dto");
let ContactListController = class ContactListController {
    constructor(contactListService) {
        this.contactListService = contactListService;
    }
    create(createContactListDto) {
        return this.contactListService.create(createContactListDto);
    }
    findAll() {
        return this.contactListService.findAll();
    }
    findOne(id) {
        return this.contactListService.findOne(+id);
    }
    async filterContacts(lastname) {
        const filterCriteriaDto = { lastName: lastname };
        return this.contactListService.filterContacts(filterCriteriaDto);
    }
    update(id, updateUserDto) {
        return this.contactListService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.contactListService.remove(+id);
    }
};
exports.ContactListController = ContactListController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_list_dto_1.CreateContactListDto]),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':lastname'),
    __param(0, (0, common_1.Param)('lastname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactListController.prototype, "filterContacts", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_list_dto_1.UpdateContactListDto]),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "remove", null);
exports.ContactListController = ContactListController = __decorate([
    (0, common_1.Controller)('contact-list'),
    __metadata("design:paramtypes", [contact_list_service_1.ContactListService])
], ContactListController);
//# sourceMappingURL=contact-list.controller.js.map