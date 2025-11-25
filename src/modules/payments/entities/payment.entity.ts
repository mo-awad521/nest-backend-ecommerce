import { Entity, Column, OneToOne, JoinColumn, Index } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Order } from "src/modules/orders/entities/order.entity";
import { PaymentProvider } from "../../../common/enums/payment-provider.enum";
import { PaymentStatus } from "../../../common/enums/payment-status.enum";

@Entity()
@Index(["status"])
export class Payment extends BaseModel {
  // fields
  @Column({
    type: "enum",
    enum: PaymentProvider,
  })
  provider: PaymentProvider;

  @Column({ nullable: true, unique: true })
  transactionId?: string;

  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  // relations
  @OneToOne(() => Order, (o) => o.payment, { onDelete: "CASCADE" })
  @JoinColumn()
  order: Order;

  @Column()
  orderId: number;
}
