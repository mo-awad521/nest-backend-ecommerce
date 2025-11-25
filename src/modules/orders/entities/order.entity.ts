import { Entity, Column, ManyToOne, OneToMany, Index } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { User } from "../../users/entities/user.entity";
import { OrderItem } from "./order-item.entity";
import { OrderStatus } from "../../../common/enums/order-status.enum";
import { PaymentMethod } from "../../../common/enums/payment-method.enum";
import { Payment } from "../../payments/entities/payment.entity";

@Entity()
@Index(["userId"])
@Index(["status"])
export class Order extends BaseModel {
  // fields
  @Column("decimal", { precision: 10, scale: 2 })
  totalAmount: string;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column({
    type: "enum",
    enum: PaymentMethod,
    nullable: true,
  })
  paymentMethod?: PaymentMethod;

  // relations
  @ManyToOne(() => User, (u) => u.orders, { onDelete: "CASCADE" })
  user: User;

  @Column()
  userId: number;

  @OneToMany(() => OrderItem, (oi) => oi.order)
  items: OrderItem[];

  @OneToMany(() => Payment, (p) => p.order)
  payment: Payment;
}
