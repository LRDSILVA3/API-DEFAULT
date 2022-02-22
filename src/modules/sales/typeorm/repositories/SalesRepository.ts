import { EntityRepository, Repository } from 'typeorm';
import Sale from '../entities/Sale';

@EntityRepository(Sale)
export class SaleRepository extends Repository<Sale>{
    public async findByName(name: string): Promise<Sale | undefined>{
        const sale = this.findOne({ where: { name: name,}});
        return sale;

    }
}