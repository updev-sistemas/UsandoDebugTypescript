import { Sku } from "../../Domain/Sku";
import { ISkuRepository } from "../Contracts/ISkuRepository";

export class SkuRepository implements ISkuRepository 
{
    constructor(){}
    
    count(): number {
        return Math.floor(Math.random());
    }
    save(target: Sku): Sku {
        console.log(`Registrando SKU ${target.barcode} - R$ ${target.price}`);
        return target;
    }
    update(id: number, target: Sku): Sku {
        console.log(`Atualizando SKU ${target.barcode} - R$ ${target.price}`);
        return target;
    }
    delete(target: Sku): boolean {
        return (this.count() % 2 == 0);
    }
    
}