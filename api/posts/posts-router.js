// implement your posts router here
const express = require('express');
const db = require("./posts-model");


const router = express.Router();

router.get('/', (req,res) => {
  db.find()
  .then((response) => {
    res.send(response);
  })
  .catch(() => {
    res.status(500).send({ message: "The posts information could not be retrieved" });
  })
})

router.get('/:id', (req,res) => {
  //console.log(req.params.id);
  db.findById(req.params.id)
  .then((response) => {
    if(response)
      res.send(response);
    else 
      res.status(404).send({ message: "The post with the specified ID does not exist" });
  })
  .catch(() => {
    res.status(500).send({ message: "The post information could not be retrieved" });
  })
})

module.exports = router;