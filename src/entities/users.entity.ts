import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UsersEntity {
  @PrimaryColumn({
    name: 'id',
    type: 'int',
  })
  id: string;

  @Column({
    name: 'username',
    unique: true,
    length: 100,
  })
  username: string;

  @Column({
    name: 'public_address',
    unique: true,
  })
  publicAddress: string;

  @Column({
    name: 'nonce',
    unique: true,
  })
  nonce: string;
}
