import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      table.integer('produto_id').unsigned().references('id').inTable('produtos')
      table.integer('quantidade').notNullable()
      table.decimal('preco_unitario', 10, 2).notNullable()
      table.decimal('preco_total', 10, 2).notNullable()
      table.timestamp('data_hora').notNullable() // Remova o valor padrão aqui
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
