module.exports = app => {
  const Contact = require('../controllers/contact.controller')
  var router = require("express").Router();

  router.post('/' , Contact.create)
  router.get('/' , Contact.findAll)
  router.get('/:id' , Contact.findOne)
  router.put('/:id' , Contact.update)
  router.delete('/:id' , Contact.delete)
  router.delete('/' , Contact.deleteAll)
  app.use('/contact', router)
}