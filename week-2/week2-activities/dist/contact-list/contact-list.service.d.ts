import { CreateContactListDto, FilterCriteriaDto } from './dto/create-contact-list.dto';
import { UpdateContactListDto } from './dto/update-contact-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ContactListService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createContactListDto: CreateContactListDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    filterContacts(filterCriteriaDto: FilterCriteriaDto): Promise<any>;
    update(id: number, updateTodoListUserDto: UpdateContactListDto): Promise<any>;
    remove(id: number): any;
}
