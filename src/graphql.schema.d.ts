
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Contact {
    id: number;
    name: string;
    phone: string;
}

export abstract class IQuery {
    abstract contacts(): Contact[] | Promise<Contact[]>;
}

export abstract class IMutation {
    abstract createContacts(name: string, phone: string): Contact | Promise<Contact>;
}
