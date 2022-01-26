import { Product } from "../../Domain/Product";
import { IProductRepository } from "../Contracts/IProductRepository";

export class ProductRepository implements IProductRepository
{
    constructor(){}
    
    count(): number {
        return Math.floor(Math.random());
    }
    save(target: Product): Product {
        console.log(`Registrando Produto ${target.code} - ${target.name}`);
        return target;
    }
    update(id: number, target: Product): Product {
        console.log(`Atualizando Produto ${target.code} - ${target.name}`);
        return target;
    }
    delete(target: Product): boolean {
        return (this.count() % 2 == 0);
    }
    
}