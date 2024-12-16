import LocalStorage from '@/api/storage/LocalStorage';
import SessionStorage from '@/api/storage/SessionStorage';
import { SignUpData, SignInData } from '@/api/swagger/Mogazoa.types';

/*** 로그인 메세지 ***/
export const _LOGIN_NEED_MESSAGE_ = '로그인이 필요한 서비스입니다.';

/*** 회원가입 정보 얻기 ***/
export const checkSignUp = () => {
  const res = LocalStorage.getItem(`postAuthSignUp`) as SignUpData | null
  return res;
};

/*** 로그인 정보 얻기 ***/
export const checkSignIn = () => {
  const res = SessionStorage.getItem(`postAuthSignIn`) as SignInData | null
  return res;
};

/*** 간편 회원가입 정보 얻기 ***/
export const checkSimpleSignUp = () => {
  const res = LocalStorage.getItem(`postAuthSignUpProvider`) as SignUpData | null
  return res;
};

/*** 간편 로그인 정보 얻기 ***/
export const checkSimpleSignIn = () => {
  const res = SessionStorage.getItem(`postAuthSignInProvider`) as SignInData | null
  return res;
};

/*** 로그인 토큰 얻기 ***/
export const getAccessToken = () => {
  return checkSignIn()?.accessToken;
};

/*** 로그인 사용자 아이디 얻기 ***/
export const getUserId = () => {
  return checkSignIn()?.user.id.toString();
};

