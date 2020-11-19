import { GET_SMS_SUCCESS, GET_SMS_FAILURE } from "../actions/types";

const initialState = {
  sms: [
    {
      campaignName: "No Campaign",
      accountName: "King Pie - Loyalty",
      MSISDN: "27832209737",
      message:
        "You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store.Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.",
      numbersSMS: "2",
      status: "queued",
      createdAt: "2020-11-06 14:03:59",
    },
    {
      campaignName: "No Campaign",
      accountName: "King Pie - Loyalty",
      MSISDN: "27832209737",
      message:
        "You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store.Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.",
      numbersSMS: "2",
      status: "queued",
      createdAt: "2020-11-06 14:03:59",
    },
    {
      campaignName: "No Campaign",
      accountName: "King Pie - Loyalty",
      MSISDN: "27832209737",
      message:
        "You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store.Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.",
      numbersSMS: "2",
      status: "queued",
      createdAt: "2020-11-06 14:03:59",
    },
    {
      campaignName: "No Campaign",
      accountName: "King Pie - Loyalty",
      MSISDN: "27832209737",
      message:
        "You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store.Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.",
      numbersSMS: "2",
      status: "queued",
      createdAt: "2020-11-06 14:03:59",
    },
    {
      campaignName: "No Campaign",
      accountName: "King Pie - Loyalty",
      MSISDN: "27832209737",
      message:
        "You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store.Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.",
      numbersSMS: "2",
      status: "queued",
      createdAt: "2020-11-06 14:03:59",
    },
    {
      campaignName: "No Campaign",
      accountName: "King Pie - Loyalty",
      MSISDN: "27832209737",
      message:
        "You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store.Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.",
      numbersSMS: "2",
      status: "queued",
      createdAt: "2020-11-06 14:03:59",
    },
    {
      campaignName: "No Campaign",
      accountName: "King Pie - Loyalty",
      MSISDN: "27832209737",
      message:
        "You have earned 0(R0) Crowns. Your balance is 86.45(R8.65). To redeem, visit a King Pie store.Every visit is a chance to be rewarded. www.kingpie.co.za/loyalty.",
      numbersSMS: "2",
      status: "queued",
      createdAt: "2020-11-06 14:03:59",
    },
  ],
  smsCampaign: [
    {
      campaignsCreated: "109",
      accountCreated: "12",
      totalSMS: "20001",
      smsCreditBalance: "0",
    },
  ],
  errors: false,
};

export default function smsOverview(state = initialState, action) {
  switch (action.type) {
    case GET_SMS_SUCCESS:
      return { ...state, sms: action.payload, errors: false };
    case GET_SMS_FAILURE:
      return { ...state, errors: true };
    default:
      return state;
  }
}
