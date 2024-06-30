import { AccountRegistrationEvent, EventBus } from '../event-bus';
import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class EmailHandlersService implements OnApplicationBootstrap {
  constructor(private readonly eventBus: EventBus) {}

  onApplicationBootstrap() {
    this.listenToAccountRegistrationEvents();
  }

  /**
   * @description
   * Listen to account registration events and log the event details.
   */
  private listenToAccountRegistrationEvents(): void {
    this.eventBus.ofType(AccountRegistrationEvent).subscribe(async (event) => {
      const { type, user, createdAt } = event;
      this.logEventDetails(event, type);
    });
  }

  /**
   * @description
   * Log the event details.
   */
  private logEventDetails(event: AccountRegistrationEvent, type: string): void {
    console.log(`\nEvent Type: ${type}`);
    console.log('Event Details:');
    console.log('---------------------');
    console.log(JSON.stringify(event, null, 2));
    console.log('---------------------');
  }
}
