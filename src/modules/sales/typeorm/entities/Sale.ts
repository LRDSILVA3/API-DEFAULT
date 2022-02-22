import Client from '../../../clients/typeorm/entities/Client';
import SalesProducts from '../../..//sales-products/typeorm/entities/SalesProducts';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne,
  } from 'typeorm';
  
  @Entity('sales')
class Sale{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() =>Client, (tbClients) => tbClients.id)
    @JoinColumn([{name:'id_client', referencedColumnName: 'id'}])
    id_client: Client[];

    @ManyToOne(() =>SalesProducts, (tbSalesProducts) => tbSalesProducts.id)
    @JoinColumn([{name:'id_sales_products', referencedColumnName: 'id'}])
    id_sales_products: SalesProducts[];

    @Column()
    total_value:string;

    @Column()
    created_at:Date;

    @Column()
    updated_at:Date
    
    client_name:string;


}
export default Sale;