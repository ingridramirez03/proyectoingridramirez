// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//nuevas rutas

app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" |Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})

app.get('/academico', (req, res) => {
    var title = app.get('appName')+" |Académico"
    res.render('academico.ejs', {title: title} )
})

app.get('/admisiones', (req, res) => {
    var title = app.get('appName')+" |Admisiones"
    res.render('admisiones.ejs', {title: title} )
})

app.get('/calendario', (req, res) => {
    var title = app.get('appName')+" |Calendario"
    res.render('calendario.ejs', {title: title} )
})

app.get('/formulario', (req, res) => {
    var title = app.get('appName')+" | Formulario"
    res.render('formulario.ejs', {title: title} )
})


app.get('/cctnoticias', (req, res) => {
    var title = app.get('appName')+" |CCT-Noticias"
    res.render('cctnoticias.ejs', {title: title} )
})

// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
