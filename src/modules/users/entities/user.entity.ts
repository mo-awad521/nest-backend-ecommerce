import { Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { Role } from "../../../common/enums/role.enum";
import { Address } from "../../addresses/entities/address.entity";
import { Order } from "../../orders/entities/order.entity";
import { Cart } from "../../cart/entities/cart.entity";
import { Wishlist } from "../../wishlist/entities/wishlist.entity";
import { Review } from "../../reviews/entities/review.entity";

@Entity()
export class User extends BaseModel {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: Role,
    default: Role.CUSTOMER,
  })
  role: Role;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ nullable: true })
  verificationToken?: string;

  @Column({ type: "datetime", nullable: true })
  verificationTokenExpires?: Date;

  @Column({ nullable: true })
  resetPasswordToken?: string;

  @Column({ type: "datetime", nullable: true })
  resetPasswordExpires?: Date;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToOne(() => Cart, (cart) => cart.user)
  @JoinColumn()
  cart: Cart;

  @OneToMany(() => Wishlist, (w) => w.user)
  wishlist: Wishlist[];

  @OneToMany(() => Review, (r) => r.user)
  reviews: Review[];
}
