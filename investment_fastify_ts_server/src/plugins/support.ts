import fp from 'fastify-plugin'
// import { Connection } from 'mysql2';
// import mysql from 'mysql2/promise';

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
  // fastify.decorate('db', await connectToExampleDb())
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string;
    //db: Connection;
  }
};
