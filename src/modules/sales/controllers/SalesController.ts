import { Request, Response } from 'express';
import ListSaleService from '../services/ListSale.service';

export default class SalesController{
    public async index(request:Request, response:Response): Promise<Response>{
        const listSales = new ListSaleService();
    
        const sales = await listSales.execute();
        return response.json(sales);
    }
}