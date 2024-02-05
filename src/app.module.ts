import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ContactsModule } from './contacts/contacts.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './interceptors/all-exceptions.filter';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: '/',
      context: ({ req }) => ({ req }),
      definitions: {
        path: join(process.cwd(), '/src/graphql.schema.d.ts'),
        outputAs: 'class',
      },
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ContactsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
