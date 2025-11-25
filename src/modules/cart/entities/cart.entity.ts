import { Entity, OneToOne, JoinColumn, Column, OneToMany, Unique } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { User } from "../../users/entities/user.entity";
import { CartItem } from "./cart-item.entity";

@Entity()
@Unique(["userId"])
export class Cart extends BaseModel {
  @OneToOne(() => User, (u) => u.cart, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;

  @Column()
  userId: number;

  @OneToMany(() => CartItem, (item) => item.cart, { cascade: true })
  items: CartItem[];
}
