import { Request, Response } from 'express';
import ListClientService from '../services/ListClientService';
import ShowClientService from '../services/ShowClientService';
import CreateClientService from '../services/CreateClientService';
import UpdateClientService from '../services/UpdateClientService';
import DeleteClientService from '../services/DeleteClientService';

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listClients = new ListClientService();

    const clients = await listClients.execute();

    return response.json(clients);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showClient = new ShowClientService();

    const clients = await showClient.execute({ id });

    return response.json(clients);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, dataNasc, phoneNumber } = request.body;

    const createClient = new CreateClientService();

    const client = await createClient.execute({
      name,
      cpf,
      dataNasc,
      phoneNumber,
    });

    return response.json(client);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, cpf, dataNasc, phoneNumber } = request.body;
    const { id } = request.params;

    const updateClient = new UpdateClientService();

    const client = updateClient.execute({
      id,
      name,
      cpf,
      dataNasc,
      phoneNumber,
    });

    return response.json(client);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteClient = new DeleteClientService();

    await deleteClient.execute({ id });

    return response.json([]);
  }
}
