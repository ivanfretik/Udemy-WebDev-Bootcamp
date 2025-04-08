import express from "express";
const app = express();
const port = 3000

app.get("/", (req, rest) => {
    rest.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, rest) => {
    rest.send("<p>Su pedido de contacto fue recibido.</p><p>Recibirá nuestra visita en breve.</p>");
});

app.get("/about", (req, rest) => {
    rest.send("<p>Cierre los ojos y medite en los colores que verá.</p><p>En ellos descubrirá la información que busca.</p>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});