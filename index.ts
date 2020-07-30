import Koa, { Context } from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"

const app = new Koa()

const router = new Router()

router.get("/", async (ctx: Context) => {
    ctx.body = "hello"
})

router.post("/github/webhook", async (ctx: Context) => {
    console.log(ctx.request.body)
    ctx.body = ""
})

app.use(bodyParser())
app.use(router.routes())
app.listen(8080)