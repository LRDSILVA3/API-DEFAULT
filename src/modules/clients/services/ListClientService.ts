import { getCustomRepository } from 'typeorm';
import { ClientRepository } from '../typeorm/repositories/ClientRepository';
import Client from '../typeorm/entities/Client';

class ListClientService {
  public async execute(): Promise<Client[]> {
    const clientsRepository = getCustomRepository(ClientRepository);

    const clients = clientsRepository.find();

    return clients;
  }
}

export default ListClientService;
