import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'dreamins_repocircuitosint',
  password: 'M^QJjWde*g@1GUqm',
  database: 'dreamins_inventario',

  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
