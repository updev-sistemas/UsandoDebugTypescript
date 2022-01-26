import { Product } from "../../Domain/Product";

export interface IProductRepository
{
    count() : number;
    save(target : Product) : Product
    update(id : number, target : Product) : Product
    delete(target:Product):boolean
}