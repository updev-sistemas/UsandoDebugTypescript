import { IProductRepository } from "./Contracts/IProductRepository";
import { ISkuRepository } from "./Contracts/ISkuRepository";
import { IUnitOfWork } from "./IUnitOfWork";
import { ProductRepository } from "./Repositories/ProductRepository";
import { SkuRepository } from "./Repositories/SkuRepository";

export class UnitOfWork implements IUnitOfWork
{
    private _product : IProductRepository;
    private _sku : ISkuRepository;

    constructor() 
    {
        this._product = new ProductRepository()
        this._sku = new SkuRepository()
    }

    product(): IProductRepository {
        return this._product
    }

    sku(): ISkuRepository {
        return this._sku
    }
    
}