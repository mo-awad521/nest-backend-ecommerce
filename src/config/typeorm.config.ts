import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

export const typeOrmConfig = (): TypeOrmModuleOptions => {
  const config = new ConfigService();

  return {
    type: "mysql",
    host: config.get("DB_HOST"),
    port: config.get("DB_HOST"),
    username: config.get("DB_USER"),
    password: config.get("DB_PASS"),
    database: config.get("DB_NAME"),
    autoLoadEntities: true,
    synchronize: true,
    charset: "utf8mb4",
  };
};
