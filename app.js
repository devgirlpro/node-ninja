const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen gor request
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index')
})


app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/blogs/create', (req, res) => {
    res.render('create')
})

//redirect a url to another
// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// })


//404 Page
app.use((req, res) => {
    res.status(404).render('404')
})