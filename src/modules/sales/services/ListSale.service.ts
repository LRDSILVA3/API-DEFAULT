import { getCustomRepository } from 'typeorm';
import {SaleRepository} from '../typeorm/repositories/SalesRepository';
import Sale from '../typeorm/entities/Sale';

class ListSaleService{
    public async execute(): Promise<Sale[]>{
        const salesRepository = getCustomRepository(SaleRepository);
        console.log(salesRepository)
        const sales = salesRepository
        .createQueryBuilder('sales')
        .leftJoinAndSelect('sales.id_client','clients')
        .leftJoinAndSelect('sales.id_sales_products','sales_products')
        .getMany();
        console.log(sales);
        return sales;
    }
}
export default ListSaleService;

