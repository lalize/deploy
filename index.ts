import Koa, { Context } from "koa"
import Router from "koa-router"

const app = new Koa()

const router = new Router()

router.get("/", async (ctx: Context) => {
    ctx.body = "hello"
})

app.use(router.routes())
app.listen(8080)