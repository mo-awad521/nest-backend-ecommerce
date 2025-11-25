import { Entity, Column, ManyToOne, Unique } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Cart } from "./cart.entity";
import { Product } from "../../products/entities/product.entity";

@Entity()
@Unique(["cartId", "productId"])
export class CartItem extends BaseModel {
  @Column({ default: 1 })
  quantity: number;

  @ManyToOne(() => Cart, (c) => c.items, { onDelete: "CASCADE" })
  cart: Cart;

  @Column()
  cartId: number;

  @ManyToOne(() => Product, (p) => p.cartItems, { onDelete: "CASCADE" })
  product: Product;

  @Column()
  productId: number;
}
