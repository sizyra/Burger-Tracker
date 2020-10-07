const express = require("express");
const burgerModel = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burgerModel.all(function(data) {
        var burgersObj = {
            burgerModel: data
        };
        console.log(burgersObj);
        res.render("index", burgersObj);
    });
});

router.post("/api/burgers", function(req,res) {
    burgerModel.create([
        "name"
    ], [
        req.body.name,
    ], function(result) {
        res.json({ id: result.insertID })
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgerModel.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    burgerModel.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

modules.exports = router;