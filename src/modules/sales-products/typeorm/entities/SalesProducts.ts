import Sale from "@modules/sales/typeorm/entities/Sale";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('sales_products')
class SalesProducts{

    @ManyToMany(() => Sale, (tbSales) => tbSales.id)
    @JoinColumn([{name:'id', referencedColumnName: 'id_sales_products'}])
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