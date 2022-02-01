import { getCustomRepository } from 'typeorm';
import { ClientRepository } from '../typeorm/repositories/ClientRepository';
import AppError from '@shared/errors/AppError';
import Client from '../typeorm/entities/Client';
interface IRequest {
  name: string;
  cpf: string;
  dataNasc: string;
  phoneNumber: string;
}
class CreateClientService {
  public async execute({
    name,
    cpf,
    dataNasc,
    phoneNumber,
  }: IRequest): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientRepository);
    const clientExists = await clientsRepository.findByName(name);

    if (clientExists) {
      throw new AppError('There is already one client with this name!');
    }
    const client = clientsRepository.create({
      name,
      cpf,
      dataNasc,
      phoneNumber,
    });

    await clientsRepository.save(client);

    return client;
  }
}

export default CreateClientService;
