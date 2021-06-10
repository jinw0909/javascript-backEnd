

const DetailController = function() {
    const test_model = require('../models/TestModel');

    const detailViewRender = function(req, res) {

        const getData = function() {
            return new Promise(function(resolve) {
                console.log('주소를 통해 넘겨받은 글 번호: ', req.params.index);
                const data = test_model.testReturnArray();
                const elem = data.find(function(v) {
                    if (v.index === parseInt(req.params.index)) {
                        return v;
                    }
                });
                resolve(elem);
            });
        };
        const renderView = function(elem) {
            return new Promise(function() {
                res.render('detail', {data : elem});
            });
        };
        getData().then(function(elem) {
            renderView(elem);
        });


        // let resData = {};
        // for (let index in data) {
        //     let dic = data[index];
        //     if (dic.index === parseInt(req.params.index)) {
        //         resData = dic;
        //         console.log("dic: ", dic, "resData: ", resData);
        //         // console.log("resData: ", resData);
        //     }
        // }
        // 배열 데이터에서 req객체를 통해 받은 글 번호에 해당하는 것만 꺼내온다.
        
    }
    return {
        detailView: function(req, res) {
            detailViewRender(req, res);
        }
    }
}

module.exports = DetailController();