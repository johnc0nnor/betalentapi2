import Server from '@ioc:Adonis/Core/Server'

/*
|--------------------------------------------------------------------------
| Global middleware
|--------------------------------------------------------------------------
|
| An array of middleware to be executed on every HTTP request.
|
*/
Server.middleware.register([
  () => import('@ioc:Adonis/Core/BodyParser'),
])

/*
|--------------------------------------------------------------------------
| Named middleware
|--------------------------------------------------------------------------
|
| Named middleware are defined a key-value pair. The key is later used to
| reference the middleware during request lifecycle.
|
*/
Server.middleware.registerNamed({
  auth: () => import('App/Middleware/Auth'),
})
