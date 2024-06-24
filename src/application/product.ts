import { v4 as uuidv4 } from 'uuid';

export default interface IProduct{
  isValid(): boolean
  enable(): void
  disable(): void
  getId(): string
  getName(): string
  getStatus(): string
  getPrice(): number
};

const DISABLED = 'disabled';
const ENABLED = 'enabled';

export class Product implements IProduct{
  private id!: string
  private name!: string
  private price!: number
  private status!: string

  constructor(name: string, price: number){
      this.name = name;
      this.price = price;
      this.id = uuidv4();
      this.status = DISABLED;
  }


  isValid(): boolean {
    if(this.status == ""){
        this.status = DISABLED;
    }

    if(this.status != ENABLED && this.status != DISABLED) {
        throw new Error('Status must be enabled or disabled');
    }

    if(this.price < 0) {
        throw new Error('Price must be greater then 0');
    }

    if(!this.id){
        throw new Error('ID not defined');
    }
    return true;
  }

  public enable(): void {
    if (this.price > 0) {
        this.status = ENABLED;
        console.log(`${this.name} ${ENABLED}!!`);
        return;
    }
    throw new Error('The price must be grater than zero to enabled the product.');
  }

  public disable(): void {
    if (this.price === 0) {
        this.status = DISABLED;
        console.log(`${this.name} ${DISABLED}!!`);
        return
    }
    throw new Error("The price must be zero in order to disable the product.");
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getStatus(): string {
    return this.status;
  }
  
  public getPrice(): number {
    return this.price;
  }
}
