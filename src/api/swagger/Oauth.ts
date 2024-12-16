import axios from 'axios';
import LocalStorage from '@/api/storage/LocalStorage';
import { teamId, OauthProps, OauthData } from '@/api/swagger/Mogazoa.types';

/*** '간편 로그인 App 등록/수정' 요청
 * 
 * Google, Kakao 간편 로그인을 위한 App 을 등록하거나 수정합니다.
 * 이미 등록된 앱이 있을 경우 덮어씌워집니다.
 * 요청 데이터 중 appKey 는 각 서비스에서 발급받은 인증 키 입니다.
 * Google 의 경우에는 "클라이언트 id" 입니다.
 * Kakao 의 경우에는 "REST API 키" 입니다.
 * 실습을 위해 발급받은 키를 등록해주세요. 실제 서비스에서 사용 하는 키를 등록해서는 안됩니다.
 */
export const postOauthApps = async (params: OauthProps): Promise<OauthData> => {
  const URL = `https://mogazoa-api.vercel.app/${teamId}/oauthApps`;
  console.log("POST - postOauthApps(): ", URL);

  try {
    const res = await axios.post(URL, params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    if (res.status === 200 || res.status === 201) {
      const resdata = res.data as OauthData;
      LocalStorage.setItem(`postOauthApps`, resdata);
      return resdata;
    } else {
      throw new Error(`Failed to postOauthApps() res.status: ${res.status}, res.data: ${res.data}`);
    }
  } catch (error) {
    throw error;
  }
};
