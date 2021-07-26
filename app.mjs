import Express from 'express';
import fare from './routes/fare.routes.mjs';
const app = Express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', [fare]);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

export default app;