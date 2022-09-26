import { 
    IS_LOGIN,
    LOGIN_LOGIN,
    LOGIN_PASSWORD,
    SIGN_UP_LOGIN,
    SIGN_UP_PASSWORD,
    VALUE_TAB,
    TOKEN,
    USER_NAME,
    TYPE_CARDS
} from './types';


export const isLoginAC = (isLogin) => {
    return { type: IS_LOGIN, isLogin };
};

export const isLoginLoginAC = (loginLogin) => {
    return { type: LOGIN_LOGIN, loginLogin };
};

export const isLoginPasswordAC = (loginPassword) => {
    return { type: LOGIN_PASSWORD, loginPassword };
};

export const isSingUpLoginAC = (singUpLogin) => {
    return { type: SIGN_UP_LOGIN, singUpLogin };
};

export const isSingUpPasswordAC = (singUpPassword) => {
    return { type: SIGN_UP_PASSWORD, singUpPassword };
};

export const isValueTabAC = (valueTab) => {
    return { type: VALUE_TAB, valueTab };
};

export const isTokenAC = (token) => {
    return { type: TOKEN, token };
};

export const isUserNameAC = (userName) => {
    return { type: USER_NAME, userName };
};

export const isTypeCardsAC = (typeCards) => {
    return { type: TYPE_CARDS, typeCards };
};
  