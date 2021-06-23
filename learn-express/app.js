const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log('1 모든 요청에 실행하고 싶어요');
    next();
});
app.get('/', (req, res, next) => {
    req.cookies // { mycookie : 'test}
    res.sendFile(path.join(__dirname, './index.html'));
    next('route');
}, (req, res) => {
    console.log('실행되나요?');
});
app.get('/', (req, res) => {
    console.log('실행되지롱');
});
app.post('/', (req, res) => {
    res.send('hello express!');
});
app.get('/category/javascript', (req, res) => {
    res.send('hello Javascript');
});
app.get('/category/:name', (req, res) => {
    res.send('hello wildcard');
});
app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('404지롱')
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(404).send('Not Found');
});


app.listen(app.get('port'), () => {
    console.log('3000번 포트에서 익스프레스 서버 실행')
});