import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSales1643993768900 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sales',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name:'id_client',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        isNullable: false,
                    },
                    {
                        name:'id_sales_products',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        isNullable: false,
                    },
                    {
                        name:'total_value', 
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
            columnNames: ['id_client'],
            referencedColumnNames: ['id'],
            referencedTableName: 'clients',
            name: 'sales_id_client'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sales');
        await queryRunner.dropForeignKey('sales','sales_id_client');
    }

}

