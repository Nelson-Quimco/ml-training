import { ContactListService } from './contact-list.service';
import { CreateContactListDto } from './dto/create-contact-list.dto';
import { UpdateContactListDto } from './dto/update-contact-list.dto';
export declare class ContactListController {
    private readonly contactListService;
    constructor(contactListService: ContactListService);
    create(createContactListDto: CreateContactListDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    filterContacts(lastname: string): Promise<any>;
    update(id: string, updateUserDto: UpdateContactListDto): Promise<any>;
    remove(id: string): any;
}
