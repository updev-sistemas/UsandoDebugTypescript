import { Sku } from "../../Domain/Sku";

export interface ISkuRepository
{
    count() : number
    save(target : Sku) : Sku
    update(id : number, target : Sku) : Sku
    delete(target:Sku):boolean
}