import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Contact } from './models/contact.model';
import { ContactsService } from './services/contacts.service';

@Resolver(of => Contact)
export class ContactsResolver {
  constructor(private contactsService: ContactsService) {}

  @Query()
  contacts() {
    return this.contactsService.all();
  }

  @Mutation()
  createContacts(@Args('name') name: string, @Args('phone') phone: string) {
    return this.contactsService.create({
      name,
      phone,
    });
  }
}
