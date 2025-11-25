import { Entity, Column, ManyToOne } from "typeorm";
import { BaseModel } from "../../../common/entities/base.entity";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Address extends BaseModel {
  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  postalCode: string;

  @ManyToOne(() => User, (user) => user.addresses, { onDelete: "CASCADE" })
  user: User;

  @Column()
  userId: number;
}
