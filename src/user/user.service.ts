import { AccountRegistrationEvent, EventBus } from '../event-bus';

import { Injectable } from '@nestjs/common';
import { User } from '../common/entity-types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(private readonly eventBus: EventBus) {}

  getUsers(): Array<User> {
    return this.users;
  }

  createUser(user: Omit<User, 'id'>): User {
    const newUser: User = {
      id: uuidv4(),
      ...user,
      verified: false,
      lastLogin: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);

    // Publish an event to the event bus
    this.eventBus.publish(new AccountRegistrationEvent(newUser, 'created'));

    return newUser;
  }
}
