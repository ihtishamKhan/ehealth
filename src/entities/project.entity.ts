import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Project extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  salt: string;

  @Column
  isActive: boolean;
}
