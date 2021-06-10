const MainController = function () {

    const test_model = require('../models/TestModel');
    //호출에 먖는 기능을 관리하는 함수
    // 모뎀을 연결하는 파트
    const mainViewRender = function(req, res) {
        // 모델 연결
        // console.log("모델에서 받은 리스트 데이터", test_model.testReturnArray());
        const data = test_model.testReturnArray();
        res.render('home', {list : data});
    };

    // 자바스크립트 promise
    // 함수 실행 흐름
    // 비동기
    // 특정 함수의 실행이 끝난 '후'에 지정한 다음 함수를 실행

    const addUserProcess = function(req, res) {

        // new Promise : 대기 (pending)
        // resolve : 이행 (fulfilled)
        // reject : 실패 (rejected)

        const dataLog = () => {
            return new Promise(function(resolve, reject) {
                // 무작위 기능 코드
                console.log('view를 통해서 사용자가 입력한 이름', req.body.name);
                console.log('view를 통해서 사용자가 입력한 영화', req.body.movie);
                console.log('view를 통해서 사용자가 입력한 시기', req.body.when);
                
                resolve(); //resolve로 다음 단계로 넘어감 //조건 분기로 resolve도 가능함
            });
        };

        const renderView = () => {
            return new Promise(function(resolve, reject) {
                res.redirect('/main');
            });
        };

        dataLog().then(function() {
            return renderView();
        });

        // POST방식으로 전송한 데이터는 req객체 안의 body객체 안에 답겨있다.
        console.log('view를 통해서 사용자가 입력한 이름', req.body.name);
        console.log('view를 통해서 사용자가 입력한 영화', req.body.movie);
        console.log('view를 통해서 사용자가 입력한 시기', req.body.when);
        // res.redirect('/main');
        res.end();
    }

    return {
        mainView: function (req, res) {
            mainViewRender(req, res);
        },
        addUser: function (req, res) {
            addUserProcess(req, res);
        }
    };
};

module.exports = MainController();