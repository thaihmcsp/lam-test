const express = require('express')
const path = require('path')
const UserRouter = require('./routers/userRouter')
const ProductRouter = require('./routers/productRouter')
const IndexRouter = require('./routers/indexRouter')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/public', express.static(path.join(__dirname, './public')))

app.use('/user', UserRouter)
app.use('/product', ProductRouter)
app.use('/', IndexRouter)


app.listen(3000)