import {
  GET_ADMINS_PENDING,
  GET_ADMINS_SUCCESS,
  GET_ADMINS_ERROR,
  GET_DELETED_ADMINS_PENDING,
  GET_DELETED_ADMINS_SUCCESS,
  GET_DELETED_ADMINS_ERROR,
  ADD_ADMIN_PENDING,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_ERROR,
  EDIT_ADMIN_PENDING,
  EDIT_ADMIN_SUCCESS,
  EDIT_ADMIN_ERROR,
  DELETE_ADMIN_PENDING,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_ERROR
} from './constants';

export const getAdminsPending = () => ({
  type: GET_ADMINS_PENDING
});

export const getAdminsSuccess = (data) => ({
  type: GET_ADMINS_SUCCESS,
  payload: data
});

export const getAdminsError = (error) => ({
  type: GET_ADMINS_ERROR,
  payload: error
});

export const getDeletedAdminsPending = () => ({
  type: GET_DELETED_ADMINS_PENDING
});

export const getDeletedAdminsSuccess = (data) => ({
  type: GET_DELETED_ADMINS_SUCCESS,
  payload: data
});

export const getDeletedAdminsError = (error) => ({
  type: GET_DELETED_ADMINS_ERROR,
  payload: error
});

export const addAdminPending = () => ({
  type: ADD_ADMIN_PENDING
});

export const addAdminSucces = (data) => ({
  type: ADD_ADMIN_SUCCESS,
  payload: data
});

export const addAdminError = (error) => ({
  type: ADD_ADMIN_ERROR,
  payload: error
});

export const editAdminPending = () => ({
  type: EDIT_ADMIN_PENDING
});

export const editAdminSucces = (data) => ({
  type: EDIT_ADMIN_SUCCESS,
  payload: data
});

export const editAdminError = (error) => ({
  type: EDIT_ADMIN_ERROR,
  payload: error
});

export const deleteAdminPending = () => ({
  type: DELETE_ADMIN_PENDING
});

export const deleteAdminSucces = (dataId) => ({
  type: DELETE_ADMIN_SUCCESS,
  payload: dataId
});

export const deleteAdminError = (error) => ({
  type: DELETE_ADMIN_ERROR,
  payload: error
});
