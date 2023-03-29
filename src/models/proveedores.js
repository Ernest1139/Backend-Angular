const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedores', {
    Id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    CodigoProveedor: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    RazonSocial: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    RFC: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Direccion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
