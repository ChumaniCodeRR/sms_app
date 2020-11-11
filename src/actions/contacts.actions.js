import {
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  GET_CONTACT_DETAILS_SUCCESS,
  GET_CONTACT_DETAILS_FAILURE,
} from "./types";
import { contactService } from "../services/contacts-service";

export const getContactList = () => {
  return (dispatch) => {
    contactService.getAll().then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(contacts) {
    return { type: GET_CONTACT_SUCCESS, payload: contacts };
  }
  function failure(error) {
    return { type: GET_CONTACT_FAILURE, error };
  }
};

export const getContactDetails = (id) => {
  return (dispatch) => {
    contactService.viewContactDetails(id).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(contactDetails) {
    return { type: GET_CONTACT_DETAILS_SUCCESS, payload: contactDetails };
  }
  function failure(error) {
    return { type: GET_CONTACT_DETAILS_FAILURE, error };
  }
};
