import express, {Request, Response, NextFunction} from 'express'
import { userRouter } from './users/user.js'

const port = 8000
const app = express()

app.use((req, res, next) => {
    console.log(`Time of request ${Date.now()}`)
    next();
})

app.use('/users', userRouter)

app.get('/hello', (req, res) => {
    throw new Error("error")
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(`Error with message: ${err.message}`)
    res.status(401).send(err.message)
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})