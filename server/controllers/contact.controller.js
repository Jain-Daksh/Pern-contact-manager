const db = require('../models')
const Contact = db.User


//create

exports.create = async (req,res) => {
  const userHash = {
    name: req.body.name ,
    email: req.body.email , 
    age: req.body.age , 
    mobile: req.body.mobile , 
    type: req.body.type , 
    address: req.body.address , 
    desc: req.body.desc ,
  }

  try {
    const user = await Contact.create(userHash)
    console.log(user)
    res.status(201).send({
      Contact: user,
      message: 'contact created'
    })
  } catch (error) {
    console.log(error)
  }
}
exports.findAll = (req, res) => {
  Contact.findAll()
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving task."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;
  Contact.findByPk(id)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving user with id=${id}`
      });
    });
}
exports.delete = (req, res) => {
  const id = req.params.id;
  Contact.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: "User was deleted successfully!"
        });
      } else {
        res.status(404).send({
          message: `Cannot delete user with id=${id}`
        });
      }
    })
};
exports.deleteAll = (req, res) => {
  Contact.destroy({
    where: {},
    truncate: false
  })
    .then(users => {
      res.status(200).send({ message: `${users} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users"
      });
    });
};
exports.update = async (req, res) => {
  let id = req.params.id
  let user = await Contact.update(req.body, { where: { id: id } })
  if (!user) { res.status(404).send(`No user with this id = ${id} `) }
  else {
    res.status(202).send({
      message: `User data has been updated`
    })
  }
}
/* 



// Delete all Users from the database.


//update a user

Footer

*/