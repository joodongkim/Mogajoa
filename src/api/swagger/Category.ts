import axios from "axios";
import SessionStorage from "@/api/storage/SessionStorage";
import { teamId, CategoryData } from "@/api/swagger/Mogazoa.types";

/*** 상품 카테고리 조회 ***/
export const getCategories = async (): Promise<CategoryData[]> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/categories`;
  console.log("GET - getCategories(): ", URL);

  try {
    const res = await axios.get(URL, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200 || res.status === 201) {
      const resData = res.data as CategoryData[];
      SessionStorage.setItem(`getCategories`, resData);
      return resData;
    } else {
      throw new Error(`Failed to getCategories() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};
