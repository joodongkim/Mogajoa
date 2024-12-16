import axios from "axios";
import SessionStorage from "@/api/storage/SessionStorage";
import { teamId, ReviewsLikeProps, ReviewsLikeData, ReviewsCancelData, ReviewData, ReviewsPatchProps, ReviewsPatchData } from "@/api/swagger/Mogazoa.types";
import { getAccessToken, _LOGIN_NEED_MESSAGE_ } from '@/api/swagger/CheckSign';

/*** 리뷰 좋아요 ***/
export const postReviewsLike = async (reviewId: number, params: ReviewsLikeProps): Promise<ReviewsLikeData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/reviews/${reviewId}/like`;
  console.log("POST - postReviewsIdLike(): ", URL);

  try {
    const res = await axios.post(URL, { content: params.content}, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ReviewsLikeData;
      SessionStorage.setItem(`postReviewsIdLike`, resData);

      return resData;
    } else {
      throw new Error(`Failed to postReviewsIdLike() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 리뷰 좋아요 취소 ***/
export const deleteReviewsLike = async (reviewId: number): Promise<ReviewsCancelData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/reviews/${reviewId}/like`;
  console.log("DELETE - deleteReviewsIdLike(): ", URL);

  try {
    const res = await axios.delete(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ReviewsCancelData;
      SessionStorage.setItem(`deleteReviewsIdLike`, resData);

      return resData;
    } else {
      throw new Error(`Failed to deleteReviewsIdLike() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 리뷰 생성 ***/
export const postReviews = async (params: ReviewsLikeProps): Promise<ReviewsLikeData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/reviews`;
  console.log("POST - postReviews(): ", URL);

  try {
    const res = await axios.post(URL, params, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ReviewsLikeData;
      SessionStorage.setItem(`postReviews`, resData);
      return resData;
    } else {
      throw new Error(`Failed to postReviews() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 리뷰 삭제 ***/
export const deleteReviews = async (reviewId: number): Promise<ReviewData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/reviews/${reviewId}`;
  console.log("DELETE - deleteReviewsId(): ", URL);

  try {
    const res = await axios.delete(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ReviewData;
      SessionStorage.setItem(`deleteReviewsId`, resData);

      return resData;
    } else {
      throw new Error(`Failed to deleteReviewsId() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 리뷰 수정 ***/
/* 
 * 이미지를 수정할 때, 기존 이미지를 유지하려면 id를, 새로운 이미지를 추가하려면 source를 넣어주세요.
 * 요청에 포함되지 않는 기존 이미지는 삭제됩니다.
 */
export const patchReviews = async (reviewId: number, params: ReviewsPatchProps): Promise<ReviewsPatchData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/reviews/${reviewId}`;
  console.log("PATCH - patchReviewsId(): ", URL);

  try {
    const res = await axios.patch(URL, params, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ReviewsPatchData;
      SessionStorage.setItem(`patchReviewsId`, resData);

      return resData;
    } else {
      throw new Error(`Failed to patchReviewsId() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};
