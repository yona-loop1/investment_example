import fp from 'fastify-plugin'
import { fastifyCors, FastifyCorsOptionsDelegatePromise } from '@fastify/cors';


export default fp<FastifyCorsOptionsDelegatePromise>(async (fastify) => {
  await fastify.register(fastifyCors, {
    origin: "*",
    // methods: 'GET, POST, OPTIONS, PUT, DELETE',
    // allowedHeaders: 'Content-Type'
  })
})

// void fastify.register(fastifyCors, {
//   origin: "http://localhost:5173",
//   methods: 'GET, POST, OPTIONS, PUT, DELETE',
//   allowedHeaders: 'Content-Type'
// });