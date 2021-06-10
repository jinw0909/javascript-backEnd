const express = require('express');
const app = express();
const port = 3002;
const router = require('./router');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//request 객체의 body 데이터를 중첩된 json 객체 형식으로 사용하기 위한 설정
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/views'));

app.listen(port, (error) => {
    if (error) {
        console.log("에러발생!", error);
    }
    console.log(port + "번 포트에서 로컬 서버 대기중입니다.");
});
// 모듈화된 Router를 호출하면서 express 실행
router(app);

// app.get("/", (req, res) => {
//     console.log(req);
//     console.log("클라이언트로부터 호출 받음!!!!");
//     res.send("<h2>Hello~<h2>"+"<div style='width: 200px; height: 200px; background: red'>box</div>");
// });
