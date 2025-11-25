import { Entity, Column, ManyToOne, Unique } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Product } from "../../products/entities/product.entity";
import { User } from "../../users/entities/user.entity";

@Entity()
@Unique(["productId", "userId"])
export class Review extends BaseModel {
  @Column("int")
  rating: number;

  @Column({ type: "text", nullable: true })
  comment?: string;

  @ManyToOne(() => Product, (p) => p.reviews)
  product: Product;

  @Column()
  productId: number;

  @ManyToOne(() => User, (u) => u.reviews)
  user: User;

  @Column()
  userId: number;
}
