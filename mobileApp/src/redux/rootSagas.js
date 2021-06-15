
/*
* rootSaga de quan ly tat ca cac saga
* sau khi tao saga phai dang ky trong rootSaga
* */

import { all } from 'redux-saga/effects'
//
// import { authSagas } from '../pages/auth/redux/sagas';


function* rootSagas () {
    yield all([
        //there your saga
        // ...authSagas
    ]);
}

export default rootSagas;
