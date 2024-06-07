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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactListService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ContactListService = class ContactListService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createContactListDto) {
        try {
            return this.prismaService.contactList.create({
                data: createContactListDto,
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async findAll() {
        try {
            return this.prismaService.contactList.findMany();
        }
        catch (error) {
            return error.message;
        }
    }
    async findOne(id) {
        try {
            return this.prismaService.contactList.findUnique({
                where: {
                    id: id,
                },
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async filterContacts(filterCriteriaDto) {
        try {
            const { firstName, lastName, email } = filterCriteriaDto;
            const filterContacts = await this.prismaService.contactList.findMany({
                where: {
                    OR: [
                        { firstName: { contains: firstName } },
                        { lastName: { contains: lastName } },
                        { email: { contains: email } },
                    ],
                },
            });
            return filterContacts.map((contact) => {
                return {
                    firstName: contact.firstName,
                    lastName: contact.lastName,
                    middleName: contact.middleName,
                };
            });
        }
        catch (error) {
            return error.message;
        }
    }
    async update(id, updateTodoListUserDto) {
        try {
            return await this.prismaService.contactList.update({
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
exports.ContactListService = ContactListService;
exports.ContactListService = ContactListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactListService);
//# sourceMappingURL=contact-list.service.js.map