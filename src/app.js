const path =require('path')
const express = require('express')
const hbs = require('hbs')

const app =express()

const port =process.env.PORT || 3000

//define paths for express config
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Welcome to my Website!',
        name: 'Diego'
    })
})

app.get('/about',(req,res)=>{
    res.render('AboutMe',{
        title:'Learn More About Me!',
        name: 'Diego'
    })
})

app.get('/javas',(req,res)=>{
    res.render('JavaS',{
        title:'JavaScript is Fun!',
        name: 'Diego'
    })
})

app.get('/java',(req,res)=>{
    res.render('Java',{
        title:'Java is Fun!',
        name: 'Diego'
    })
})
app.get('/website',(req,res)=>{
    res.render('Websites',{
        title:'Websites are Fun!',
        name: 'Diego'
    })
})

app.get('/python',(req,res)=>{
    res.render('Python',{
        title:'Python is Fun!',
        name: 'Diego'
    })
})
app.get('/resume',(req,res)=>{
    res.render('Resume',{
        title:'Resume is Fun!',
        name: 'Diego'
    })
})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name: 'Diego',
        errorMessage:'Help page not found'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name: 'Diego',
        errorMessage:'Page not found'
    })
})

app.listen(port, ()=>{
    console.log('server is up on port '+port)
})