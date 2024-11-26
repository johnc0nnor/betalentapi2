import Route from '@ioc:Adonis/Core/Route'
Route.post('/usuarios', 'UsuariosController.store')
Route.post('/login', 'UsuariosController.login')
Route.post('/logout', 'UsuariosController.logout').middleware('auth')

Route.group(() => {
  Route.get('/clientes', 'ClientesController.index') // Lista todos os clientes
  Route.get('/clientes/:id', 'ClientesController.show') // Exibe detalhes de um cliente
  Route.post('/clientes', 'ClientesController.store') // Cria um novo cliente
  Route.put('/clientes/:id', 'ClientesController.update') // Atualiza um cliente
  Route.delete('/clientes/:id', 'ClientesController.destroy') // Remove um cliente

  // Rotas de Produtos
  Route.get('/produtos', 'ProdutosController.index') // Lista todos os produtos ativos
  Route.get('/produtos/:id', 'ProdutosController.show') // Exibe detalhes de um produto
  Route.post('/produtos', 'ProdutosController.store') // Cria um novo produto
  Route.put('/produtos/:id', 'ProdutosController.update') // Atualiza um produto
  Route.delete('/produtos/:id', 'ProdutosController.destroy') // Remove um produto (exclusão lógica)

  // Rotas de Vendas
  Route.post('/vendas', 'VendasController.store') // Registra uma venda
}).middleware('auth') // Protege todas as rotas com o middleware de autenticação
