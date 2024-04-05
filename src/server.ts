import fastify from "fastify";
import { serializerCompiler, validatorCompiler, ZodTypeProvider} from 'fastify-type-provider-zod'
import { createEvent } from "./routes/create-event";


const app = fastify();

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)


app.listen({ port: 3333 }).then(() => {
    console.log("HTTP server running on http://localhost:3333")
})
