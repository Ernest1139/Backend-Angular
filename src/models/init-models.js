var DataTypes = require("sequelize").DataTypes;
var _productos = require("./productos");

function initModels(sequelize) {
  var productos = _productos(sequelize, DataTypes);


  return {
    productos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
