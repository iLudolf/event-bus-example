import { EmailHandlersModule } from './email-handlers/email-handlers.module';
import { EventBusModule } from './event-bus';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [EventBusModule, UserModule, EmailHandlersModule],
})
export class AppModule {}
