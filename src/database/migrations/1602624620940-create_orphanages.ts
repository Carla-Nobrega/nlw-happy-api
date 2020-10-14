import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602624620940 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //REALIZA AS ALTERAÇÕES NO BANCO DE DADOS
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //NÃO PODE SER NEGATIVA
                    isPrimary: true, //primary key
                    isGenerated: true, // Gerada automaticatimente
                    generationStrategy: 'increment' //autoincremeto 
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name:'latitude',
                    type:'decimal',//float
                    scale: 10,//numeros depois da virgula
                    precision:2,//numeros antes da virgula
                },
                {
                    name:'longitude',
                    type:'decimal',//float
                    scale: 10,//numeros depois da virgula
                    precision:2,//numeros antes da virgula
                },
                {
                    name:'about',
                    type: 'text',
                },
                {
                    name:'instructions',
                    type: 'text',
                },
                {
                    name:'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name:'opening_hours',
                    type: 'varchar'                    
                }
            ]

        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //DESFAZER O QUE FOI FEITO NO MÉTODO UP
        await queryRunner.dropTable('orphanages');
    }

}
