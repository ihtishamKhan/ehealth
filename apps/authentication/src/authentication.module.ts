import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { authenticationProviders } from './authentication.providers';
import { DatabaseModule } from '@app/common/database/database.module';
import { AuthModule } from '@app/common/auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, ...authenticationProviders],
})
export class AuthenticationModule {}
