import { EventBus } from './event-bus';
import { Module } from '@nestjs/common';

@Module({
  providers: [EventBus],
  exports: [EventBus],
})
export class EventBusModule {}
