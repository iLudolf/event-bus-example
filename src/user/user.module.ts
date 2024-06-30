import { EventBusModule } from 'src/event-bus';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [EventBusModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
