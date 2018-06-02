import { all, takeEvery, takeLatest, select, call, put } from 'redux-saga/effects';
import { UsersLoginAction, UserActionsType } from '../store/types/user';

const sampleFunction = function* (action: UsersLoginAction) { // action_type goes here
    const state = yield select(state => state);
    console.log('========state from saga=========');
    console.log(state, action);    
    console.log('====================================');
    // invoke API / function, CALL
    // const response = yield call(function, param1, param2, ...);

    // const result = yield response.json();
    // console.log(result);
    // yield call(showMessage, '输入成功');

    // call another reducer, PUT
    // yield put(REDUX_ACTION);
  };

  const rootSaga = function* () {
    yield takeLatest(UserActionsType.LOG_IN, sampleFunction);
    // yield takeEvery(LOGOUT, logoutSage);
  };
  
  export default rootSaga;
  