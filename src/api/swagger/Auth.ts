import axios from 'axios';
import LocalStorage from '@/api/storage/LocalStorage';
import SessionStorage from '@/api/storage/SessionStorage';
import { teamId, SignUpProps, SignUpData, SignInProps, SignInData, SimpleSignUpProps, SimpleSignUpData, SimpleSignInProps, SimpleSignInData } from '@/api/swagger/Mogazoa.types';

/*** '회원가입' 요청 ***/
export const postSignUp = async (params: SignUpProps): Promise<SignUpData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/auth/signUp`;
  console.log("POST - postAuthSignUp(): ", URL);

  try {
    const res = await axios.post(URL, params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resdata = res.data as SignUpData;
      LocalStorage.setItem(`postAuthSignUp`, resdata);
      return resdata;
    } else {
      throw new Error(`Failed to postAuthSignUp() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** '로그인' 요청 ***/
export const postSignIn = async (params: SignInProps): Promise<SignInData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/auth/signIn`;
  console.log("POST - postAuthSignIn(): ", URL);

  try {
    const res = await axios.post(URL, params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resdata = res.data as SignInData;
      SessionStorage.setItem(`postAuthSignIn`, resdata);
      return resdata;
    } else {
      throw new Error(`Failed to postAuthSignIn() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** '간편 회원가입' 요청 ***/
export const postSignUpProvider = async (provider: string, params: SimpleSignUpProps): Promise<SimpleSignUpData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/auth/signUp/${provider}`;
  console.log("POST - postAuthSignUpProvider(): ", URL);

  try {
    const res = await axios.post(URL, params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resdata = res.data as SimpleSignUpData;
      LocalStorage.setItem(`postAuthSignUpProvider`, resdata);
      return resdata;
    } else {
      throw new Error(`Failed to postAuthSignUpProvider() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** '간편 로그인' 요청 ***/
export const postSignInProvider = async (provider: string, params: SimpleSignInProps): Promise<SimpleSignInData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/auth/signIn/${provider}`;
  console.log("POST - postAuthSignInProvider(): ", URL);

  try {
    const res = await axios.post(URL, params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resdata = res.data as SignInData;
      SessionStorage.setItem(`postAuthSignInProvider`, resdata);
      return resdata;
    } else {
      throw new Error(`Failed to postAuthSignInProvider() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};
