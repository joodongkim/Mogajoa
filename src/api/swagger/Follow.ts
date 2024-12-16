import axios from 'axios';
import SessionStorage from '@/api/storage/SessionStorage';
import { teamId, User, UserData } from '@/api/swagger/Mogazoa.types';
import { getAccessToken, _LOGIN_NEED_MESSAGE_ } from '@/api/swagger/CheckSign'

/*** 유저 팔로우 ***/
export const postFollow = async (params: User): Promise<UserData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/follow`;
  console.log("POST - postFollow(): ", URL);

  try {
    const res = await axios.post(URL, { userId: params.id}, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as UserData;
      SessionStorage.setItem(`postFollow`, resData);
      return resData;
    } else {
      throw new Error(`Failed to postFollow() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저 언팔로우 ***/
export const deleteFollow = async (params: User): Promise<UserData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/follow`
  console.log('DELETE - deleteFollow(): ', URL)

  try {
    const res = await axios.delete(URL, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      data: {
        userId: params.id,
      },
    })

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as UserData;
      SessionStorage.setItem(`deleteFollow`, resData);
      return resData;
    } else {
      throw new Error(`Failed to deleteFollow() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error
  }
}
