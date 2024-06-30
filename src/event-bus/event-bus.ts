import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Event } from './event';
import { Type } from '../common/shared-types';
import { notNullOrUndefined } from '../common/shared-utils';

@Injectable()
export class EventBus implements OnModuleDestroy {
  private eventStream = new Subject<Event>();
  private destroy$ = new Subject<void>();

  /**
   * @description
   * Publish an event which any subscribers can react to.
   */
  publish<T extends Event>(event: T): void {
    this.eventStream.next(event);
  }

  /**
   * @description
   * Returns an RxJS Observable stream of events of the given type.
   *
   * This means that the subscriber function can safely access all updated
   * data related to the event.
   */
  ofType<T extends Event>(type: Type<T>): Observable<T> {
    return this.eventStream.asObservable().pipe(
      takeUntil(this.destroy$),
      filter((e) => e.constructor === type),
      filter(notNullOrUndefined),
    ) as Observable<T>;
  }

  /**
   * @description
   * Returns an RxJS Observable stream of events filtered by a custom predicate.
   *
   * This means that the subscriber function can safely access all updated
   * data related to the event.
   */
  filter<T extends Event>(predicate: (event: Event) => boolean): Observable<T> {
    return this.eventStream.asObservable().pipe(
      takeUntil(this.destroy$),
      filter((e) => predicate(e)),
      filter(notNullOrUndefined),
    ) as Observable<T>;
  }

  /** @internal */
  onModuleDestroy(): any {
    this.destroy$.next();
  }
}
