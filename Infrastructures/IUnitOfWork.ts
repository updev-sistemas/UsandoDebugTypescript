import { IProductRepository } from "./Contracts/IProductRepository";
import { ISkuRepository } from "./Contracts/ISkuRepository";

export interface IUnitOfWork
{
    product() : IProductRepository
    sku() : ISkuRepository
}