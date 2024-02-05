import { Test, TestingModule } from '@nestjs/testing';
import { ContactsResolver } from './contacts.resolver';

describe('UsersResolver', () => {
  let resolver: ContactsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsResolver],
    }).compile();

    resolver = module.get<ContactsResolver>(ContactsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
