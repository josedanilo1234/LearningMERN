import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 4000;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log(`listening on ${port}`);
});