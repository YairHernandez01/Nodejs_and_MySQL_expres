import express from "express"
import { crud_productos } from "./controlador/crud_productos.js";
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static('./vista'))
app.use(express.static('./controlador'))
app.use(express.static('./modelo'))
//
app.set('views','./vista')
app.set('view engine','ejs')
app.listen('5000',function() {
    console.log('Aplicacion iniciada en :http://localhost:5000');
})
app.get('/',crud_productos.leer);
app.post('/crud',crud_productos.cud);

