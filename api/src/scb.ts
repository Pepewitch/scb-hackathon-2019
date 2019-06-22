import axios from "axios";
import {
  SCB_BASE_URL,
  SCB_KEY,
  SCB_SECRET,
  TEST_RESOURCE_OWNER_ID
} from "./config";

export const getToken = (uid: string, authCode?: string) => {
  return axios
    .post(
      `${SCB_BASE_URL}/v1/oauth/token`,
      {
        applicationKey: SCB_KEY,
        applicationSecret: SCB_SECRET,
        authCode
      },
      {
        headers: {
          "Content-Type": "application/json",
          resourceOwnerId: TEST_RESOURCE_OWNER_ID,
          requestUId: uid,
          "accept-language": "EN"
        }
      }
    )
    .then(e => e.data);
};

export const authorize = (uid: string) => {
  return axios
    .get(`${SCB_BASE_URL}/v2/oauth/authorize`, {
      headers: {
        apikey: SCB_KEY,
        apisecret: SCB_SECRET,
        resourceOwnerId: TEST_RESOURCE_OWNER_ID,
        requestUId: uid,
        "response-channel": "mobile",
        endState: "mobile_app",
        "accept-language": "EN"
      }
    })
    .then(e => e.data);
};

export const buy = (uid: string, amount: number, token: string) => {
  return axios
    .post(
      `${SCB_BASE_URL}/v2/deeplink/transactions`,
      {
        paymentAmount: amount,
        transactionType: "PAYMENT",
        transactionSubType: "BPA"
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
          resourceOwnerId: TEST_RESOURCE_OWNER_ID,
          requestUId: uid,
          channel: "scbeasy"
        }
      }
    )
    .then(e => e.data);
};
