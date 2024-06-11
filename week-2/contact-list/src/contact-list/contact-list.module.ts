import { Module } from '@nestjs/common';
import { ContactListService } from './contact-list.service';
import { ContactListController } from './contact-list.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContactListController],
  providers: [ContactListService],
})
export class ContactListModule {}
