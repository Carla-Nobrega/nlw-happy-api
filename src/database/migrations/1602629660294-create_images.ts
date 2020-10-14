import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602629660294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
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
                    name: 'path',
                    type:'varchar'                    
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                }
            ],
            foreignKeys:[
                {
                    name:'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName: 'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate:'CASCADE', //ALTERA O ID DE FORMA AUTOMATICA QDO O ID FOR ALTERADO
                    onDelete:'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
