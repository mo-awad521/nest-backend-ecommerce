import { Entity, Column, ManyToOne, OneToMany, Index } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Category } from "../../categories/entities/category.entity";
import { ProductImage } from "./product-image.entity";
import { Review } from "../../reviews/entities/review.entity";
import { OrderItem } from "../../orders/entities/order-item.entity";
import { CartItem } from "../../cart/entities/cart-item.entity";
import { Wishlist } from "../../wishlist/entities/wishlist.entity";

@Entity()
@Index(["categoryId"])
@Index(["slug"])
export class Product extends BaseModel {
  @Column()
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: string;

  @Column({ default: 0 })
  stock: number;

  @OneToMany(() => ProductImage, (img) => img.product, { cascade: true })
  images: ProductImage[];

  @ManyToOne(() => Category, (c) => c.products, {
    nullable: true,
    onDelete: "SET NULL",
  })
  category?: Category;

  @Column({ nullable: true })
  categoryId?: number;

  @OneToMany(() => Review, (r) => r.product)
  reviews: Review[];

  @Column({ type: "float", default: 0 })
  avgRating: number;

  @OneToMany(() => OrderItem, (oi) => oi.product)
  orderItems: OrderItem[];

  @OneToMany(() => CartItem, (ci) => ci.product)
  cartItems: CartItem[];

  @OneToMany(() => Wishlist, (w) => w.product)
  wishlist: Wishlist[];
}
