import { AccountRegistrationEvent, EventBus } from '../event-bus';
import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class EmailHandlersService implements OnApplicationBootstrap {
  constructor(private readonly eventBus: EventBus) {}

  onApplicationBootstrap() {
    this.listenToAccountRegistrationEvents();
  }

  private listenToAccountRegistrationEvents(): void {
    this.eventBus.ofType(AccountRegistrationEvent).subscribe(async (event) => {
      const { type, user, createdAt } = event;
      this.logEventDetails(event, type);
    });
  }

  private logEventDetails(event: AccountRegistrationEvent, type: string): void {
    console.log('\n');
    Logger.log(JSON.stringify(event), `Event: ${type}`);
  }
}
