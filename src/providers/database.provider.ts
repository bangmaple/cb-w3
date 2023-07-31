import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'reacountdevdb.corl71r3cldk.ap-southeast-1.rds.amazonaws.com',
        port: 5432,
        username: 'postgres',
        password: 'Realive1234!',
        database: 'chainblade',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];
