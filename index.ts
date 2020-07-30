import Koa, { Context } from "koa"
import Router from "koa-router"
import bodyParser from "koa-bodyparser"
import Ssh from "node-ssh"
import fs from "fs"
import { argv } from "yargs"

const ssh = new Ssh()

const client = ssh.connect({
    host: <string>argv.h,
    username: <string>argv.u,
    port: 22,
    privateKey: fs.readFileSync(<string>argv.i, "utf-8")
})

const app = new Koa()

const router = new Router()

router.get("/deploy", async (ctx: Context, next: any) => {
    const response = await (await client).execCommand("echo hi")
    console.log(response)
})

router.post("/github/webhook", async (ctx: Context, next: any) => {
    const response = await (await client).execCommand("echo hi")
    console.log(response)
})

app.use(bodyParser())
app.use(router.routes())
app.listen(8080)