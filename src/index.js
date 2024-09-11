const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);

/** Endpoints de nuestro servidor  */

//http://localhost:3000
app.get('/', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});
//http://localhost:3000/about-us
app.get('/about-us', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});
//http://localhost:3000/services
app.get('/services', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});
//Inciador del servidor
app.listen(port, () => console.log(`Servidor corriendo en el puerto http://localhost:${port}`));