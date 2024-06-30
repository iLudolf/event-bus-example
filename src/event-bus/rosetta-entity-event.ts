import { Event } from './event';

/**
 * @description
 * The base class for all entity events used by the EventBus system.
 * * For event type `'deleted'` the input will most likely be an `id: ID`
 *
 * @docsCategory events
 * */
export abstract class RosettaEntityEvent<Entity, Input = any> extends Event {
  public readonly entity: Entity;
  public readonly type: 'created' | 'updated' | 'deleted';
  public readonly input?: Input;

  protected constructor(
    entity: Entity,
    type: 'created' | 'updated' | 'deleted',
    input?: Input,
  ) {
    super();
    this.entity = entity;
    this.type = type;
    this.input = input;
  }
}
