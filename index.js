const app = require('express')();

app.get('/', (req, res) => {
    res.json({ name: 'It works!' })
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})