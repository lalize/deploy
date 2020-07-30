import Koa, { Context } from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"
//import Ssh from "node-ssh"
import fs from "fs"
import { argv } from "yargs"
/*
const ssh = new Ssh()

const client = ssh.connect({
    host: <string>argv.h,
    username: <string>argv.u,
    port: 22,
    privateKey: fs.readFileSync(<string>argv.i, "utf-8")
})

*/

const app = new Koa()

const router = new Router()

router.post("/github/webhook", async (ctx: Context, next: any) => {
    console.log(ctx.request.origin)
    console.log(ctx.request.body.repository.url)
    next();
})

app.use(bodyParser())
app.use(router.routes())
app.listen(8080)