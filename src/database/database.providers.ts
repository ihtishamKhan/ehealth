import { Sequelize } from 'sequelize-typescript';
import { User } from '../entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'ezsdevinstance.c3fwgc6ytfgi.us-east-2.rds.amazonaws.com',
        port: 3306,
        username: 'ezshifa',
        password: 'j*$N^BxXA5!G34@tO#',
        database: 'ezs_user',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
