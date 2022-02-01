import { EntityRepository, Repository } from 'typeorm';
import Client from '../entities/Client';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  public async findByName(name: string): Promise<Client | undefined> {
    const client = this.findOne({
      where: {
        name,
      },
    });
    return client;
  }
}
