import { User } from '../../../../src/entities/user.entity';

export const authenticationProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
