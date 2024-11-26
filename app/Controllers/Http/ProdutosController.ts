import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'

export default class ProdutosController {

  public async index({ response }: HttpContextContract) {
    const produtos = await Produto.query()
      .where('ativo', true)
      .orderBy('nome', 'asc')
    return response.json(produtos)
  }

  public async show({ params, response }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id)
    return response.json(produto)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['nome', 'descricao', 'preco'])
    const produto = await Produto.create(data)
    return response.status(201).json(produto)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id)
    const data = request.only(['nome', 'descricao', 'preco'])
    produto.merge(data)
    await produto.save()
    return response.json(produto)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id)
    produto.merge({ ativo: false })
    await produto.save()
    return response.status(204).send({})
  }
}
