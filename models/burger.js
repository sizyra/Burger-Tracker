const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll()
    },
    insertOne: function() {
        orm.insertOne()
    },
    updateOne: function() {
        orm.updateOne()
    }
};

modules.export = burger;