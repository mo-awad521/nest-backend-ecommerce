import { Entity, Column, ManyToOne, Unique } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { User } from "../../users/entities/user.entity";
import { Product } from "../../products/entities/product.entity";

@Entity()
@Unique(["userId", "productId"])
export class Wishlist extends BaseModel {
  @ManyToOne(() => User, (u) => u.wishlist, { onDelete: "CASCADE" })
  user: User;

  @Column()
  userId: number;

  @ManyToOne(() => Product, (p) => p.wishlist, { onDelete: "CASCADE" })
  product: Product;

  @Column()
  productId: number;
}
