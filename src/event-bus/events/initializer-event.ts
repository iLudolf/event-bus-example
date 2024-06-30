import { Event } from '../event';

/**
 * @description
 * This event is fired when Rosetta finished initializing its services inside the {@code InitializerService}
 *
 * @docsCategory events
 * @docsPage Event Types
 * @since 1.7.0
 */
export class InitializerEvent extends Event {
  constructor() {
    super();
  }
}
