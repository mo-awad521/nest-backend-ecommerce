import { Entity, Column, ManyToOne } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Product } from "./product.entity";

@Entity()
export class ProductImage extends BaseModel {
  @Column()
  url: string;

  @ManyToOne(() => Product, (p) => p.images, { onDelete: "CASCADE" })
  product: Product;

  @Column()
  productId: number;
}
