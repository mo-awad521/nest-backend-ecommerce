import { Entity, Column, OneToMany, Index } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Product } from "../../products/entities/product.entity";

@Entity()
export class Category extends BaseModel {
  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
