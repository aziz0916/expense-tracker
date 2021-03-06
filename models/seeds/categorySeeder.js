if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')
const Category = require('../category')

const CATEGORY = [{ name: '家居物業' }, { name: '交通出行' }, { name: '休閒娛樂' }, { name: '餐飲食品' }, { name: '其他' }]

db.once('open', () => {
  Category.create(CATEGORY)
    .then(() => {
      process.exit()
    })
})
