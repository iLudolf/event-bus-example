import { EmailHandlersService } from './email-handlers.service';
import { EventBusModule } from '../event-bus';
import { Module } from '@nestjs/common';

@Module({
  imports: [EventBusModule],
  providers: [EmailHandlersService],
})
export class EmailHandlersModule {}
