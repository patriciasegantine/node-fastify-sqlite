import fastify from 'fastify';
import { knex } from "./dabase";

const port = 5000

const app =  fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello',
  async () => {
    const tables = await knex('sqlite_schema').select('*')
    
    return tables
  })

app.listen({
  port: port
})
  .then(() => {
    console.log(`HTTP Server Running - ${port}`)
  })
