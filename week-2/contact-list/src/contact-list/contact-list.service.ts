import { Injectable } from '@nestjs/common';
import {
  CreateContactListDto,
  FilterCriteriaDto,
} from './dto/create-contact-list.dto';
import { UpdateContactListDto } from './dto/update-contact-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactListService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createContactListDto: CreateContactListDto) {
    try {
      return this.prismaService.contact.create({
        data: createContactListDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return this.prismaService.contact.findMany();
    } catch (error) {
      return error.message;
    }
  }

  findOne(id: number) {
    try {
      return this.prismaService.contact.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async filterContacts(filterCriteriaDto: FilterCriteriaDto) {
    try {
      const { firstName, lastName, email } = filterCriteriaDto;
      const filterContacts = await this.prismaService.contact.findMany({
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
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateContactListDto: UpdateContactListDto) {
    try {
      return await this.prismaService.contact.update({
        where: {
          id,
        },
        data: updateContactListDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  remove(id: number) {
    try {
      return this.prismaService.contact.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error.message;
    }
  }
}
