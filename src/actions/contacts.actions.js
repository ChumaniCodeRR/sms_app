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

export const editContact = (data) => {
  return (dispatch) => {
    contactService.editContact(data).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(contacts) {
    return { type: EDIT_CONTACT_SUCCESS, payload: contacts };
  }
  function failure(error) {
    return { type: EDIT_CONTACT_FAILURE, error };
  }
};

export const createContact = (data) => {
  return (dispatch) => {
    contactService.createContact(data).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function success(contacts) {
    return { type: ADD_CONTACT_SUCCESS, payload: contacts };
  }
  function failure(error) {
    return { type: ADD_CONTACT_FAILURE, error };
  }
};
