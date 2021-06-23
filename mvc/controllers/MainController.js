const MainController = function () {

    //호출에 먖는 기능을 관리하는 함수
    // 모뎀을 연결하는 파트
    const test_model = require('../models/TestModel');
    const main_model = require('../models/MainModel');

    const mainViewRender = function(req, res) {
        // 모델 연결
        // console.log("모델에서 받은 리스트 데이터", test_model.testReturnArray());
        // const data = test_model.testReturnArray();
        // res.render('home', {list : data});
        
        let data = {};
        // 부서 리스트 불러오기
        const getDepartmentList = function() {
            return new Promise(function(resolve){
                main_model.getDepartmentValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.department = rows;
                        console.log(rows);
                        resolve();
                    }
                });
            });
        }

        // 직급 리스트 불러오기
        const getPositionList = function() {
            return new Promise(function(resolve){
                main_model.getPositionValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.position = rows;
                        console.log(rows);
                        resolve();
                    }
                });
            });
        }


        // 모델을 통해 데이터베이스에 저장된 리스트를 가져온다
        const getList = function() {
            return new Promise(function(resolve){
                //MainModel의 getList를 호출
                main_model.getList({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        console.log(rows);
                        data.list = rows;
                        resolve();
                    }
                });
            })
        };
        // 화면페이지로 데이터베이스에서 꺼내온 데이터를 보낸다
        const view = function() {
            res.render('home', data);
        };

        getDepartmentList()
        .then(function(){
            return getPositionList();
        }).then(function(){
            return getList();
        }).then(function(){
            return view();
        });

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
                
                resolve(); //resolve로 다음 단계로 넘어감 //조건 분기 resolve도 가능
            });
        };

        const renderView = () => {
            return new Promise(function(resolve, reject) {
                res.redirect('/main');
                res.end();
                resolve();
            });
        };

        dataLog().then(function() {
            return renderView();
        }).catch(function() {
            console.log('에러발생');
        });

        // POST방식으로 전송한 데이터는 req객체 안의 body객체 안에 답겨있다.
        // console.log('view를 통해서 사용자가 입력한 이름', req.body.name);
        // console.log('view를 통해서 사용자가 입력한 영화', req.body.movie);
        // console.log('view를 통해서 사용자가 입력한 시기', req.body.when);
        // res.redirect('/main');
        // res.end();
    }

    const createNewUser = function(req, res) {
        console.log("client로부터 넘겨받은 데이터", req.body)
        main_model.createNewUser(req.body, function(err, rows){
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.redirect('/main');
            }
        });
    }

    return {
        mainView: function (req, res) {
            mainViewRender(req, res);
        },
        addUser: function (req, res) {
            addUserProcess(req, res);
        },
        createNewUser: function(req, res) {
            createNewUser(req, res);
        }
    };
};

module.exports = MainController();