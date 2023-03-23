// Importeer express uit de node_modules map
import express from 'express'

// Maak een nieuwe express app aan
const app = express()

// maak een const voor de API, dit is de BASE URL
const baseUrl = 'https://api.buurtcampus-oost.fdnd.nl/api/v1';

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', async function (request, response) {

  // voeg base url toe met stekjes = stekjes url
  const urlStekjes = baseUrl + '/stekjes'

  const data = await fetch(urlStekjes).then(response => response.json());

  // render de pagina maar ook de data van de API door naar view
  response.render('index', data)
})

app.get('/stekjes', async function (request, response) {
  // console log request dat is gemaakt met de anchor
  console.log(request)

  // nieuwe url gemaakt met daarachter de nodige data voor de API request (zoals id)
  const urlId = baseUrl + '/stekjes?id=' + request.query.id
  const data = await fetch(urlId).then(response => response.json());

  response.render('plant', data)
})

app.get('/admin', async function (request, response) {

  response.render('admin')
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})