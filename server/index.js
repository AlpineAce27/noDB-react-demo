//import packages
import express from 'express'
import ViteExpress from 'vite-express'

//set up express instance
const app = express()

//set up middleware
app.use(express.json()) //make sure the app knows to use JSON
app.use(express.static('/')) //

//data
let TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

let globalID = 4


//Routes/endpoints
//CRUD (create, read, update, delete) or get, post, put, delete
app.get('/api/allInvoices', (request, response) => {
    response.status(202).send(TEST_DATA)
})

app.post('/api/invoice', (req, res) => {

    const invoiceObject = req.body //use body obj to send data for larger or sensative data

    invoiceObject.id = globalID

    TEST_DATA.push(invoiceObject)

    globalID++

    res.status(201).send(TEST_DATA)
})

app.delete('/api/invoice/:id', (req, res) => {
    const id2kill = req.params.id //use params to send data for shorter or non-sensative data
    TEST_DATA = TEST_DATA.filter((el) => el.id != id2kill)
    res.status(200).send(TEST_DATA)
})

app.put('/api/invoice/:id', (req, res) => {
    const id2change = req.params.id

    //get description, rate and hours from the body 
    const newDesc = req.body.bodyDescription
    const newRate = req.body.bodyRate
    const newHours = req.body.bodyHours

    //find object we'll need to edit
    const editJob = TEST_DATA.find((el)=> el.id == id2change)
    //update the object with the new desc, rate, and hours
    editJob.description = newDesc
    editJob.rate = newRate
    editJob.hours = newHours 
    //send back the updated TEST_DATA array
    res.status(200).send(TEST_DATA)
})
//open the door to the server
ViteExpress.listen(app, 2727, () => console.log('server running at: http://localhost:2727'))