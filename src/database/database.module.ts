import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'demodb',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Adjust path to match your entities
      synchronize: true, // Set to false in production
    }),
  ],
})
export class DatabaseModule {}
