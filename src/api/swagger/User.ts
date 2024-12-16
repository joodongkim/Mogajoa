import axios from 'axios';
import SessionStorage from '@/api/storage/SessionStorage';
import { teamId, UserData, UsersProps, ProductListData, FolloweesData, FollowersData } from '@/api/swagger/Mogazoa.types';
import { getAccessToken, _LOGIN_NEED_MESSAGE_ } from '@/api/swagger/CheckSign'

/*** 내 정보 조회 ***/
export const getUsersMe = async (): Promise<UserData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/me`
  console.log('GET - getUsersMe(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as UserData;
      SessionStorage.setItem(`getUsersMe`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUsersMe() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 내 정보 수정 ***/
export const patchUsersMe = async (params: UsersProps): Promise<UserData | null> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/me`
  console.log('PATCH - patchUsersMe(): ', URL)

  try {
    const res = await axios.patch(URL, params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as UserData;
      SessionStorage.setItem(`patchUsersMe`, resData);
      return resData;
    } else {
      throw new Error(`Failed to patchUsersMe() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저 랭킹 조회 ***/
export const getUsersRanking = async (): Promise<UserData[]> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/ranking`
  console.log('GET - getUsersRanking(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as UserData[];
      SessionStorage.setItem(`getUsersRanking`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUsersRanking() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저 정보 조회 ***/
export const getUsersInfo = async (userId: string): Promise<UserData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/${userId}`
  console.log('GET - getUserId(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as UserData;
      SessionStorage.setItem(`getUserId`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUserId() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저가 생성한 상품 조회 ***/
export const getUsersProducts = async (userId: string): Promise<ProductListData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/${userId}/created-products`
  console.log('GET - getUserIdCreatedProducts(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductListData;
      SessionStorage.setItem(`getUserIdCreatedProducts`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUserIdCreatedProducts() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저가 리뷰한 상품 조회 ***/
export const getUsersReviews = async (userId: string): Promise<ProductListData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/${userId}/reviewed-products`
  console.log('GET - getUserIdReviewedProducts(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductListData;
      SessionStorage.setItem(`getUserIdReviewedProducts`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUserIdReviewedProducts() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저가 찜한 상품 조회 ***/
export const getUsersLikes = async (userId: string): Promise<ProductListData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/${userId}/favorite-products`
  console.log('GET - getUserIdFavoriteProducts(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductListData;
      SessionStorage.setItem(`getUserIdFavoriteProducts`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUserIdFavoriteProducts() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저가 팔로우한 유저 조회 ***/
export const getUsersFollowing = async (userId: string): Promise<FolloweesData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/${userId}/followees`
  console.log('GET - getUserIdFollowees(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as FolloweesData;
      SessionStorage.setItem(`getUserIdFollowees`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUserIdFollowees() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 유저를 팔로우한 유저 조회 ***/
export const getUsersFollowers = async (userId: string): Promise<FollowersData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/users/${userId}/followers`
  console.log('GET - getUserIdFollowers(): ', URL)
  
  try {
    const res = await axios.get(URL, {
      headers: {
        'accept': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as FollowersData;
      SessionStorage.setItem(`getUserIdFollowers`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getUserIdFollowers() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};
