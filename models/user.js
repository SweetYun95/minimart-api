const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            id: {
               type: Sequelize.STRING(255),
               allowNull: false,
               unique: true,
            },
            name: {
               type: Sequelize.STRING(255),
               allowNull: false,
            },
            password: {
               type: Sequelize.STRING(255),
               allowNull: false,
            },
            role: {
               type: Sequelize.ENUM('ADMIN', 'USER'),
               allowNull: false,
               defaultValue: 'USER',
            },
            address: {
               type: Sequelize.STRING(255),
               allowNull: false,
            },
            gender: {
               type: Sequelize.CHAR('f', 'm'),
               allowNull: false,
            },
         },
         {
            sequelize,
            timestamps: true,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         }
      )
   }
   static associate(db) {}
}
