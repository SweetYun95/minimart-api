const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]

const User = require('./user')
const Item = require('./item')
const Cart = require('./cart')
const CartItem = require('./cartItem')
const Category = require('./category')
const ItemCategory = require('./itemCategory')
const Order = require('./order')
const OrderItem = require('./orderItem')
const Image = require('./image')

const db = {}
const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize

db.User = User
db.Item = Item
db.Cart = Cart
db.CartItem = CartItem
db.Category = Category
db.ItemCategory = ItemCategory
db.Order = Order
db.OrderItem = OrderItem
db.Image = Image

User.init(sequelize)
Item.init(sequelize)
Cart.init(sequelize)
CartItem.init(sequelize)
Category.init(sequelize)
ItemCategory.init(sequelize)
Order.init(sequelize)
OrderItem.init(sequelize)
Image.init(sequelize)

User.associate(db)
Item.associate(db)
Cart.associate(db)
CartItem.associate(db)
Category.associate(db)
ItemCategory.associate(db)
Order.associate(db)
OrderItem.associate(db)
Image.associate(db)

module.exports = db
