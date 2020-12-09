import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/routes';
import config from '../config.json';

const app = express();
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client'));
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

const uri = config.mongoURI;
if (uri) {
    mongoose.connect(uri,
        { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });
} else {
    throw new Error('Database details were not defined in the configuration file');
}

mongoose.connection
    .once('open', () => console.info('Connected to Mongo on: ' + uri))
    .on('error', (error) => console.error(error.toString()));

app.use('/', router);

//React Routing Help
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})
export default app;