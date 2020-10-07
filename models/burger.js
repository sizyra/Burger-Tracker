const orm = require("../config/orm.js");

class Burger {
    constructor() {

    };

    getAll() {
        orm.selectAll();
    };

    createNew() {
        orm.insertOne();
    };

    update() {
        orm.updateOne();
    };
};

modules.export = Burger;