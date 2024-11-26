import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersController {
  public async index({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const users = await Usuario.all()
      return response.status(200).send(users)
    } catch {
      return response.status(401).send({ message: 'Não autorizado' })
    }
  }

  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const body = request.only(['email', 'senha'])

      if (!body.email || !body.senha) {
        return response.status(400).send({ message: 'Email e senha são obrigatórios' })
      }

      const existingUser = await Usuario.query().where('email', body.email).first()
      if (existingUser) {
        return response.status(400).send({ message: 'Email já está em uso' })
      }

      const user = await Usuario.create(body)

      const token = await auth.use('api').generate(user)

      return response.status(201).send({ user, token })
    } catch (error) {
      return response.status(500).send({ error: 'Erro ao criar usuário' })
    }
  }

  public async show({ params, auth, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const user = await Usuario.findOrFail(params.id)
      return response.status(200).send(user)
    } catch {
      return response.status(401).send({ message: 'Não autorizado' })
    }
  }

  public async update({ params, request, auth, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const body = request.body()
      const user = await Usuario.findOrFail(params.id)

      user.email = body.email
      user.senha = body.senha

      await user.save()

      return response.status(200).send(user)
    } catch {
      return response.status(401).send({ message: 'Não autorizado' })
    }
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const user = await Usuario.findOrFail(params.id)
      await user.delete()
      return response.status(204).send({})
    } catch {
      return response.status(401).send({ message: 'Não autorizado' })
    }
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, senha } = request.only(['email', 'senha'])

    if (!email || !senha) {
      return response.status(400).send({ message: 'Email e senha são obrigatórios' })
    }

    const user = await Usuario.query().where('email', email).first()

    if (!user || !(await Hash.verify(user.senha, senha))) {
      return response.status(400).send({ message: 'Credenciais inválidas' })
    }

    const token = await auth.use('api').generate(user)

    return response.status(200).send({ token })
  }
}
