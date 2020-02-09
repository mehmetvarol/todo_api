var express = require('express')
var router = express.Router()
var Todo = require('../models/Todo')
/* Todo Listeleme Islemi Burada Yapilacak. */
router.get('/', function(req, res, next) {
  Todo.find()
    .then(todos => {
      res.json(todos)
    })
    .catch(err => {
      res.json(err)
    })
})
/* Todo Ekleme Islemi Burada Yapilacak. */
router.post('/', function(req, res, next) {
  new Todo({
    name: req.body.name,
    description: req.body.description,
    flag: req.body.flag,
    status: false,
    subTodo: [
      {
        name: req.body.subname,
        status: false
      }
    ]
  })
    .save()
    .then(() => {
      Todo.find()
      .then(todos => {
        res.json(todos)
      })
      .catch(err => {
        res.json(err)
      })
    })
    .catch(err => {
      res.json('Kaydetme İşleminde Hata Oluştu.')
    })
})

/* Todo Guncelleme Islemi Burada Yapilacak. */
router.put('/:id', function(req, res, next) {
  var id = req.params.id

  Todo.findByIdAndUpdate({ _id: id }, req.body)
    .then(newTodo => {
      Todo.find()
      .then(todos => {
        res.json(todos)
      })
      .catch(err => {
        res.json(err)
      })
    })
    .catch(err => {
      res.json('Güncelleme İşleminde Hata Oluştu.')
    })
})
/* Todo Silme Islemi Burada Yapilacak. */
router.delete('/:id', function(req, res, next) {
  var id = req.params.id
  Todo.findByIdAndRemove(id)
    .then(() => {
      Todo.find()
      .then(todos => {
        res.json(todos)
      })
      .catch(err => {
        res.json(err)
      })
    })
    .catch(err => {
      res.json('Silme İşleminde Hata Oluştu.')
    })
})
module.exports = router
