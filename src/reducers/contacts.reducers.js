import {
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  GET_CONTACT_DETAILS_SUCCESS,
  GET_CONTACT_DETAILS_FAILURE,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
  DELETE_CONTACT,
} from "../actions/types";
const initialState = {
  contacts: [
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
    {
      contactName: "King Free Pie - Oct 2020",
      contactDescription: "King Free Pie - Oct 2020",
      account: "King Pie - Loyalty",
    },
  ],
  contactDetails: [
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
    {
      firstName: "n/a",
      lastName: "n/a",
      msisdn: "27769349713",
      custom: "51134433",
    },
  ],
  errors: false,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        errors: false,
      };
    case ADD_CONTACT_FAILURE:
      return {
        ...state,
        errors: true,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        errors: false,
      };

    case GET_CONTACT_FAILURE:
      return {
        ...state,
        errors: true,
      };

    case GET_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        contactDetails: action.payload,
        errors: false,
      };
    case GET_CONTACT_DETAILS_FAILURE:
      return {
        ...state,
        errors: false,
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
      };
    case EDIT_CONTACT_FAILURE:
      return {
        ...state,
        errors: false,
      };

    default:
      return state;
  }
}
