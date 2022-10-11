import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Project } from './project.entity';

@Table({
  tableName: 'User',
})
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  salt: string;

  @Column
  isActive: boolean;

  // table name
  static tableName = 'user';

  // Relation with project
  //   @HasMany(() => Project)
  //   projects: Project[];

  // tablename: 'users',
  //   static associate(models) {
  //     User.hasMany(models.Project, {
  //       foreignKey: 'userId',
  //       as: 'projects',
  //     });
  //   }
}
