import { 
    IS_LOGIN,
    LOGIN_LOGIN,
    LOGIN_PASSWORD,
    SIGN_UP_LOGIN,
    SIGN_UP_PASSWORD,
    VALUE_TAB,
    TOKEN,
    USER_NAME
} from '../types';


const initialState = {
  isLogin: Boolean(Number(localStorage.getItem('login'))),
  loginLogin: '',
  loginPassword: '',
  singUpLogin: '',
  singUpPassword: '',
  valueTab: '1',
  token: '',
  userName: ''
};

const registrationReducer = ( state = initialState,action) => {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
      };
    case LOGIN_LOGIN:
      return {
        ...state,
        loginLogin: action.loginLogin,
      };
    case LOGIN_PASSWORD:
      return {
        ...state,
        loginPassword: action.loginPassword,
      };
    case SIGN_UP_LOGIN:
      return {
        ...state,
        singUpLogin: action.singUpLogin,
      };
    case SIGN_UP_PASSWORD:
      return {
        ...state,
        singUpPassword: action.singUpPassword,
      };
    case VALUE_TAB:
      return {
        ...state,
        valueTab: action.valueTab,
      };
    case TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};


export default registrationReducer;
