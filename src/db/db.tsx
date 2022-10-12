import React from "react";
import Dexie, { Table } from "dexie";

export interface LocalUsers {
  id?: number;
  email: string;
  password: string;
}

export interface Profile {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  avatar?: string;
  gender?: string;
  bvn?: string;
  address?: string;
  currency?: string;
}

export interface Guarantor {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  gender?: string;
  address?: string;
}

export interface Socials {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface Education {
  level?: string;
  employmentStatus?: string;
  sector?: string;
  duration?: string;
  officeEmail?: string;
  monthlyIncome?: string[];
  loanRepayment?: string;
}

export interface FetchedUsers extends Profile, Guarantor, Socials, Education {
  createdAt?: string;
  orgName?: string;
  userName?: string;
  email?: string;
  phoneNumber?: string;
  lastActiveDate?: string;
  profile?: Profile;
  guarantor?: Guarantor;
  accountBalance?: string;
  accountNumber?: string;
  socials?: Socials;
  education?: Education;
  id?: string;
}

export class Users extends Dexie {
  localusers!: Table<LocalUsers>;
  fetchedusers!: Table<FetchedUsers>;
  fetcheduser!: Table<FetchedUsers>;

  constructor() {
    super("usersDatabase");
    this.version(1).stores({
      localusers: "++id, email, password",
      fetchedusers:
        "createdAt, orgName, userName, email, phoneNumber, lastActiveDate, *profile, *guarantor, accountBalance, accountNumber, *socials, *education, id",
      fetcheduser:
        "createdAt, orgName, userName, email, phoneNumber, lastActiveDate, *profile, *guarantor, accountBalance, accountNumber, *socials, *education, id",
    });
  }
}

export const db = new Users();
