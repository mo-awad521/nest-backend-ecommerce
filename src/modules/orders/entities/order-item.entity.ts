import { Entity, Column, ManyToOne } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Order } from "./order.entity";
import { Product } from "../../products/entities/product.entity";

@Entity()
export class OrderItem extends BaseModel {
  @Column("int")
  quantity: number;

  @Column("decimal", { precision: 10, scale: 2 })
  price: string;

  @ManyToOne(() => Order, (o) => o.items, { onDelete: "CASCADE" })
  order: Order;

  @Column()
  orderId: number;

  @ManyToOne(() => Product, (p) => p.orderItems, { onDelete: "RESTRICT" })
  product: Product;

  @Column()
  productId: number;
}
