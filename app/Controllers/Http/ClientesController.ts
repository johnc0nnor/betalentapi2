import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Venda from 'App/Models/Venda'

export default class ClienteController {

  public async index({ response }: HttpContextContract) {
    const clientes = await Cliente.query().orderBy('id', 'asc')
    return response.json(clientes)
  }

  public async show({ params, request, response }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)

    const { mes, ano } = request.qs()
    let vendasQuery = Venda.query()
      .where('cliente_id', params.id)
      .orderBy('data_hora', 'desc')

    if (mes && ano) {
      vendasQuery = vendasQuery.whereRaw(
        'MONTH(data_hora) = ? AND YEAR(data_hora) = ?',
        [parseInt(mes), parseInt(ano)]
      )
    }

    const vendas = await vendasQuery
    return response.json({ cliente, vendas })
  }


  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['nome', 'cpf'])
    const cliente = await Cliente.create(data)
    return response.status(201).json(cliente)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    const data = request.only(['nome', 'cpf'])
    cliente.merge(data)
    await cliente.save()
    return response.json(cliente)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const cliente = await Cliente.findOrFail(params.id)
    await cliente.delete()

    await Venda.query().where('cliente_id', params.id).delete()
    return response.status(204).send({})
  }
}
