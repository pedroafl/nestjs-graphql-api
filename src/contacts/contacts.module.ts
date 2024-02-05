import { Module } from '@nestjs/common';
import { ContactsResolver } from './contacts.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { ContactsService } from './services/contacts.service';

@Module({
  imports: [PrismaModule],
  providers: [ContactsResolver, ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}
