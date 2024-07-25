const express = require('express')
const app = express()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views',);
const { name, description, invite, support, pfp, feature1, feature2, feature3, feature4 } = require("./config.json")
const port = 8000
app.listen(port, () => {
  console.log(`Website is working `)
})

app.use(express.static("assets"));
// 35.186.245.55

app.get('/', (req, res) => {
 
        res.render("index", {name: name, description: description, invite: invite, support: support, pfp: pfp, f1: feature1, f2: feature2, f3: feature3, f4: feature4});

});




const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});















// SOCIAL LINKS [Diwas Atreya]
app.get('/discord', async (req, res) => {
    res.redirect(support)
});

app.get('/server', async (req, res) => {
    res.redirect(support)
});

app.get('/youtube', async (req, res) => {
    res.redirect(`https://www.youtube.com/c/`)
});

app.get('/invite', async (req, res) => {
    res.redirect(invite)
});

app.get('/github', async (req, res) => {
    res.redirect(`https://github.com/`)
});

app.get('/git', async (req, res) => {
    res.redirect(`https://github.com/`)
});

app.get('/instagram', async (req, res) => {
    res.redirect(`https://www.instagram.com/`)
});

app.get('/ig', async (req, res) => {
    res.redirect(`https://www.instagram.com/`)
});

app.get('/twitter', async (req, res) => {
    res.redirect(`https://www.instagram.com/`)
});

app.get('/reddit', async (req, res) => {
    res.redirect(`https://www.reddit.com/r`)
});
