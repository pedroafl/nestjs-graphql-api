import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { contactCreateInput } from '@prisma/client';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  all() {
    return this.prisma.contact.findMany();
  }

  create(data: contactCreateInput) {
    return this.prisma.contact.create({ data });
  }
}
