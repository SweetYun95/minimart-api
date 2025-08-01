const Sequelize = require('sequelize')

module.exports = class Img extends Sequelize.Model {
   static init(sequelize) {
      return super.init(
         {
            oriImgName: {
               type: Sequelize.STRING(255),
               allowNull: false,
            },
            imgUrl: {
               type: Sequelize.STRING(255),
               allowNull: false,
            },
            repImgYn: {
               type: Sequelize.ENUM('Y', 'N'),
               defaultValue: 'N',
               allowNull: false,
            },
         },
         {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Image',
            tableName: 'images',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
         }
      )
   }
   static associate(db) {
      Img.belongsTo(db.Item, {
         foreignKey: 'itemId',
         targetKey: 'id',
         onDelete: 'CASCADE',
      })
      Img.belongsTo(db.Review, {
         foreignKey: 'reviewId',
         targetKey: 'id',
         onDelete: 'CASCADE',
      })
   }
}
