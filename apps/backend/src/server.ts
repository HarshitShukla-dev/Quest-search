import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./connect";
import { Database } from "./config/database";

async function main() {
  const server = fastify();

  try {
    await Database.connect();

    await server.register(fastifyConnectPlugin, {
      routes,
    });

    server.get("/health", (_, reply) => {
      reply.send({ status: "ok" });
    });

    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || "localhost";

    await server.listen({ host: host, port: port });
    console.log("Server is listening at", server.addresses());
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
}

void main();