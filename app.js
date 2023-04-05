// Importeer express uit de node_modules map
import express, { application } from 'express'

// Maak een nieuwe express app aan
const app = express()

// maak een const voor de API, dit is de BASE URL
const baseUrl = 'https://api.buurtcampus-oost.fdnd.nl/api/v1';

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Stel afhandeling van formulieren in (BEKIJK DEZE CODE NOG)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Maak een route voor de index
app.get('/', async function (request, response) {

  // voeg base url toe met stekjes = stekjes url
  const urlStekjes = baseUrl + '/stekjes'

  const data = await fetch(urlStekjes).then(response => response.json());

  // render de pagina maar ook de data van de API door naar view
  response.render('index', data)
})

app.get('/stekje', async function (request, response) {
  // console log request dat is gemaakt met de anchor
  // console.log(request)

  // nieuwe url gemaakt met daarachter de nodige data voor de API request (zoals id)
  const urlId = baseUrl + '/stekjes?id=' + request.query.id
  // maak een nieuwe const en fetch nu de unieke stekje met de url + de meegegeven id
  const data = await fetch(urlId).then(response => response.json());

  response.render('plant', data)
})

app.get('/admin', function (request, response) {
  // geef variable mee genaamd plantjePosted (zodat het niet not defined meegeeft)
  response.render('admin', {plantjePosted: request.query.plantjePosted})
})

app.post('/submitted', function (request, response) {

  const urlStekjes = baseUrl + "/stekjes"

  console.log(request.body)

  console.log(urlStekjes)

  postJson(urlStekjes, request.body).then((data) => {

    if (data.success) {
      response.redirect('/admin?plantjePosted=true')
      console.log(request.query)
    } else {
      console.log('er gaat wat mis :(')

      response.render('admin', data)
    }
  })
})

// FALLBACK - catched elke andere request dat buiten de huidige routes valt, PLAATS DIT ONDERAAN
app.get('*', (request, response) => {
  response.render('errors/404');
});

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

// POST FUNCTION (BEKIJK DEZE CODE NOG)

/**
 * postJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */
export async function postJson(url, body) {
  return await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .catch((error) => error)
}