import { getCustomRepository } from 'typeorm';
import { ClientRepository } from '../typeorm/repositories/ClientRepository';
import Client from '../typeorm/entities/Client';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}
class ShowClientService {
  public async execute({ id }: IRequest): Promise<Client> {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne(id);

    if (!client) {
      throw new AppError('Client not found.');
    }

    return client;
  }
}

export default ShowClientService;
