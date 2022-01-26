import { EntityBase } from "./EntityBase";
import { Sku } from "./Sku";

export class Product extends EntityBase 
{
    constructor(public code : string, public name : string, public sku : Sku)
    {
        super();
    }
}