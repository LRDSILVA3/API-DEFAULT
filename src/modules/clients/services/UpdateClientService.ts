import { getCustomRepository } from 'typeorm';
import { ClientRepository } from '../typeorm/repositories/ClientRepository';
import Client from '../typeorm/entities/Client';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  cpf: string;
  dataNasc: string;
  phoneNumber: string;
}
class UpdateClientService {
  public async execute({
    id,
    name,
    cpf,
    dataNasc,
    phoneNumber,
  }: IRequest): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientRepository);

    const client = await clientsRepository.findOne(id);

    if (!client) {
      throw new AppError('Client not found.');
    }
    const clientExists = await clientsRepository.findByName(name);

    if (clientExists && name != client.name) {
      throw new AppError('There is already one client with this name!');
    } else {
      client.name = name;
      client.cpf = cpf;
      client.dataNasc = dataNasc;
      client.phoneNumber = phoneNumber;

      await clientsRepository.save(client);
      return client;
    }
  }
}

export default UpdateClientService;
