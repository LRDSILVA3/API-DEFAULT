import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSalesProducts1644930231995 implements MigrationInterface {

  
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sales_products',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {name:'id_sale',
                     type: 'varchar',
                      isNullable: false},
                    {
                        name:'id_product',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name:'product_name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name:'value', 
                        type:'varchar',
                        isNullable: false,

                    },
                    {
                        name:'quantity', 
                        type:'varchar',
                        isNullable: false,

                    },
                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' },

                ]
            })
        )
        await queryRunner.createForeignKey(
            'sales',
             new TableForeignKey({
            columnNames: ['id_sales_products'],
            referencedColumnNames: ['id'],
            referencedTableName: 'sales_products',
            name: 'sales_id_sales_products'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sales_products');
        await queryRunner.dropForeignKey('sales','sales_id_sales_products');
    }

}
