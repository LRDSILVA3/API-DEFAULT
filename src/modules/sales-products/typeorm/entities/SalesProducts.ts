import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('sales_products')
class SalesProducts{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    id_sale:string

    @Column()
    id_product:string

    @Column()
    product_name:string

    @Column()
    value:string

    @Column()
    quantity:string

    @Column()
    created_at:Date

    @Column()
    updated_at:Date

    
}
export default SalesProducts;