import { IsString, IsEnum, IsNumber, IsArray } from "class-validator";
import { PaymentMethod } from "../../../common/enums/payment-method.enum";

export class CreateOrderDto {
  @IsArray()
  items: {
    productId: number;
    quantity: number;
  }[];

  @IsString()
  totalAmount: string;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;
}
