import express from 'express'
import { Liquid } from 'liquidjs'

const app = express()
const engine = new Liquid()
const PORT = process.env.PORT || 8000

// express engine
app.engine('liquid', engine.express())
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// home
app.get('/', async (request, response) => {
  response.render('index.liquid')
});

// 404 route
app.use((request, response) => {
  response.status(404).render('404.liquid', { 
    path: request.path 
  });
});

app.listen(PORT, () => console.log(`App: http://localhost:${PORT}`))