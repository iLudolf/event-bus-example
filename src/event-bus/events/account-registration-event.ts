import { Event } from '../event';
import { User } from '../../common/entity-types';

/**
 * @description
 * This event is fired when a new user registers an account, either as a stand-alone signup or after
 *
 * @docsCategory events
 */
export class AccountRegistrationEvent extends Event {
  constructor(
    public user: User,
    public type: 'created' | 'updated' | 'deleted',
  ) {
    super();
  }
}
