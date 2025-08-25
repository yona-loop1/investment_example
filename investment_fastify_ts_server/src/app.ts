import { join } from 'path';
import AutoLoad, {AutoloadPluginOptions} from '@fastify/autoload';
import { FastifyPluginAsync, FastifyServerOptions } from 'fastify';
import { Connection } from 'mysql2/promise';
//import { connectTest, connectToExampleDb, connectToMysql, createExampleDatabase, createExampleCustomersTable, createExampleInvestmentsTable, dropExampleTable, connectPoolToExampleDb, showDb, showTables } from './connection/exampleConnection';
import { connectTest, connectToExampleDb, connectToMysql, createExampleCustomersTable, createExampleDatabase, connectPoolToExampleDb, showDb, showTables, createExampleInvestmentsTable } from './connection/exampleConnection';
import multipart from '@fastify/multipart';
import 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
  db: Connection;
  }
}

export interface AppOptions extends FastifyServerOptions, Partial<AutoloadPluginOptions> {
  
}
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
}

const app: FastifyPluginAsync<AppOptions> = async (
    fastify,
    opts,
): Promise<void> => {
  // Place here your custom code!

  //await fastify.register(require("fastify/express"))
  // void fastify.register(fastifyCors, {
  //   origin: "http://localhost:5173",
  //   methods: 'GET, POST, OPTIONS, PUT, DELETE',
  //   allowedHeaders: 'Content-Type'
  // });

  // fastify.options('*', (request, reply) => {
  //   reply
  //     .header('Access-Control-Allow-Origin', 'http://localhost:5173')
  //     .header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  //     .header('Access-Control-Allow-Headers', 'Content-Type')
  //     .send();
  // });
  
  fastify.register(multipart);

  // write comments & explanations
  (async () => {
    const connected = await connectTest();
    if (connected) {
      const connectionmysql = await connectToMysql();
      const connectedMySQL = await createExampleDatabase(connectionmysql);
      if (connectedMySQL) {
        const DbIsShowed = await showDb(connectionmysql);
        console.log('This is DB:', DbIsShowed);
        const connectionExampleDb = await connectToExampleDb();
        await createExampleCustomersTable(connectionExampleDb);
        await createExampleInvestmentsTable(connectionExampleDb);
        // const droped = await dropExampleTable(connectionExampleDb) // delete a table
        // if (droped) {
        //   console.log("droped ");
        // }
        //await deleteExampleInvestment(connectionExampleDb)
        //await deleteExampleCustomer(connectionExampleDb)
        const DbTableShowed = await showTables(connectionExampleDb);
        console.log('This is DB tables:', DbTableShowed);
      };
    }
  })();
  
  const poolConnectionExampleDb = await connectPoolToExampleDb();
  fastify.decorate('db', poolConnectionExampleDb);

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })
};

export default app;
export { app, options }
