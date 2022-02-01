import { getCustomRepository } from 'typeorm';
import { ClientRepository } from '../typeorm/repositories/ClientRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class DeleteClientService {
  public async execute({ id }: IRequest): Promise<void> {
    const clientsRepository = getCustomRepository(ClientRepository);

    const client = await clientsRepository.findOne(id);

    if (!client) {
      throw new AppError('Client not found.');
    }

    await clientsRepository.remove(client);
  }
}

export default DeleteClientService;
