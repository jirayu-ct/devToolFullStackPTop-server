import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';
let data: Array<any> = [];
const app = new Elysia()
  .use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    exposeHeaders: ['Referrer-Policy']
  }))


  .post("/user", (req) => {
    data.push(req.body);
    return {
      success: true
    };
  })
  .get("/user-list", () => {
    return data;
  })

  .get("/", () => "Hello jirayu")



  .listen(4000);
console.log(
  `hi 🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);