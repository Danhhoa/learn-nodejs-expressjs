import {newsRouter} from './news.js'
import {sitesRouter}from './site.js'

function route(app) {
    app.get('/news', newsRouter);

    app.get('/', sitesRouter);

}

export default route
