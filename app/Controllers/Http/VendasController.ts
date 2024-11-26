import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venda from 'App/Models/Venda'
import Produto from 'App/Models/Produto'
import Cliente from 'App/Models/Cliente'

export default class VendasController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['cliente_id', 'produto_id', 'quantidade'])

    const cliente = await Cliente.findOrFail(data.cliente_id)
    const produto = await Produto.findOrFail(data.produto_id)

    const precoUnitario = produto.preco
    const precoTotal = precoUnitario * data.quantidade

    const venda = await Venda.create({
      cliente_id: data.cliente_id,
      produto_id: data.produto_id,
      quantidade: data.quantidade,
      preco_unitario: precoUnitario,
      preco_total: precoTotal,
    })

    return response.status(201).json(venda)
  }
}
