import { engine } from 'express-handlebars';
import path from 'path'
import express  from 'express';
import morgan  from 'morgan';
import {fileURLToPath} from 'url';
import route from './routes/index.js';

const PORT = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,'/public')))

// http loggers
// app.use(morgan('combined'))

// template engine
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource','views'));

route(app)


app.listen(PORT)
console.log(`Running Express App at http://localhost:${PORT}`)