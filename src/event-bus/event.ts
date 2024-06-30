/**
 * @description
 * The base class for all events used by the EventBus system.
 *
 * @docsCategory events
 * */
export abstract class Event {
  public readonly createdAt: Date;
  protected constructor() {
    this.createdAt = new Date();
  }
}
