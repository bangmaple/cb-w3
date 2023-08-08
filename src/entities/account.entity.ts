import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'account',
})
export class AccountEntity {
  @Generated('increment')
  @PrimaryColumn({
    name: 'account_id',
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

  @Column({
    name: 'role',
  })
  role: string;

  @Column({
    name: 'membership',
  })
  membership: string;
}
