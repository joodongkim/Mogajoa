import axios from "axios";
import SessionStorage from "@/api/storage/SessionStorage";
import { teamId, ProductsProps, ProductListData, ProductData, ReviewListData } from "@/api/swagger/Mogazoa.types";
import { getAccessToken, _LOGIN_NEED_MESSAGE_ } from '@/api/swagger/CheckSign';

/*** 상품 목록 조회 ***/
export const getProducts = async (keyword: string = "", category: number = 1, order: string = "recent", cursor: number = 1): Promise<ProductListData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/products?keyword=${keyword}&category=${category}&order=${order}&cursor=${cursor}`;
  console.log("GET - getProducts(): ", URL);

  try {
    const res = await axios.get(URL, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductListData;
      SessionStorage.setItem(`getProducts`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getProducts() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 상품 생성 ***/
export const postProducts = async (params: ProductsProps): Promise<ProductData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/products`;
  console.log("POST - postProducts(): ", URL);

  try {
    const res = await axios.post(URL, params, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductData;
      SessionStorage.setItem(`postProducts`, resData);
      return resData;
    } else {
      throw new Error(`Failed to postProducts() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 상품 상세 조회 ***/
export const getProductsDetail = async (productId: number): Promise<ProductData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/products/${productId}`;
  console.log("GET - getProductsId(): ", URL);

  try {
    const res = await axios.get(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductData;
      SessionStorage.setItem(`getProductsId`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getProductsId() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 상품 수정 ***/
export const patchProducts = async (productId: number,params: ProductsProps): Promise<ProductData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/products/${productId}`;
  console.log("PATCH - patchProductsId(): ", URL);

  try {
    const res = await axios.patch(URL, params, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductData;
      SessionStorage.setItem(`patchProductsId`, resData);
      return resData;
    } else {
      throw new Error(`Failed to patchProductsId() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 상품 삭제 ***/
export const deleteProducts = async (productId: number): Promise<ProductData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/products/${productId}`;
  console.log("DELETE - deleteProductsId(): ", URL);

  try {
    const res = await axios.delete(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductData;
      SessionStorage.setItem(`deleteProductsId`, resData);
      return resData;
    } else {
      throw new Error(`Failed to deleteProductsId() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 상품 리뷰 목록 조회 ***/
export const getProductsReviews = async (productId: number, order: string = 'recent', cursor: number = 1): Promise<ReviewListData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/products/${productId}/reviews?order=${order}&cursor=${cursor}`;
  console.log("GET - getProductsIdReviews(): ", URL);

  try {
    const res = await axios.get(URL, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ReviewListData;
      SessionStorage.setItem(`getProductsIdReviews`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getProductsIdReviews() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 상품 찜하기 ***/
export const postProductsFavorite = async (productId: number): Promise<ProductData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/products/${productId}/favorite`;
  console.log("POST - postProductsIdFavorite(): ", URL);

  try {
    const res = await axios.post(URL, {}, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductData;
      SessionStorage.setItem(`postProductsIdFavorite`, resData);
      return resData;
    } else {
      throw new Error(`Failed to postProductsIdFavorite() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};

/*** 상품 찜하기 취소 ***/
export const deleteProductsFavorite = async (productId: number): Promise<ProductData> => {
  const accessToken = getAccessToken();
  if (!accessToken) { throw new Error(`Failed to getAccessToken(), ${_LOGIN_NEED_MESSAGE_}`); }

  const URL = `https://mogazoa-api.vercel.app/${teamId}/products/${productId}/favorite`;
  console.log("DELETE - deleteProductsIdFavorite(): ", URL);

  try {
    const res = await axios.delete(URL, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as ProductData;
      SessionStorage.setItem(`deleteProductsIdFavorite`, resData);
      return resData;
    } else {
      throw new Error(`Failed to deleteProductsIdFavorite() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};
