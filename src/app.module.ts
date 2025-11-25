import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import { typeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { ProductsModule } from "./modules/products/products.module";
import { CategoriesModule } from "./modules/categories/categories.module";
import { CartModule } from "./modules/cart/cart.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { AddressesModule } from "./modules/addresses/addresses.module";
import { PaymentsModule } from "./modules/payments/payments.module";
import { WishlistModule } from "./modules/wishlist/wishlist.module";
import { ReviewsModule } from "./modules/reviews/reviews.module";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => typeOrmConfig(),
    }),

    AuthModule,

    UsersModule,

    ProductsModule,

    CategoriesModule,

    CartModule,

    OrdersModule,

    AddressesModule,

    PaymentsModule,

    WishlistModule,

    ReviewsModule,
  ],
})
@Module({
  imports: [TypeOrmModule.forRoot()],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
