import Fastify from "fastify";
import cors from "@fastify/cors";
import formBody from "@fastify/formbody";
import { connectDb } from "./database.js";
import { postRoutes } from "./routes/post.routes.js";
import fastifyEnv from "@fastify/env";
import { optionsEnv } from "./configEnv.js";

const fastify = Fastify({
  logger: true,
});
fastify.register(fastifyEnv, optionsEnv).ready((err) => {
  if (err) console.error(err);
  // console.log(fastify.config);
});

fastify.register(connectDb);
fastify.register(cors, { origin: "*" });
fastify.register(formBody);

//RUTAS
fastify.register(postRoutes, { prefix: "/post" });

const start = async () => {
  try {
    await fastify.ready();
    fastify.listen({ port: process.env.PORT,host: process.env.HOST});
    console.log("corriendo por el puerto 4000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
