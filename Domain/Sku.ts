import { EntityBase } from "./EntityBase";

export class Sku extends EntityBase 
{
    constructor(public barcode : string, public price : number, public factor : number)
    {
        super();
    }
}