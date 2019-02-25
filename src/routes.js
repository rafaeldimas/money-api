const fs = require('fs')
const path = require('path')
const pathControllers = path.join(__dirname, 'app', 'controllers')

let controllers = {}
fs.readdirSync(pathControllers)
  .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const controller = require(path.join(pathControllers, file))
    controllers[controller.path] = controller.router
  })

module.exports = app => {
  Object.keys(controllers).forEach(path => {
    app.use(path, controllers[path])
  })
}
