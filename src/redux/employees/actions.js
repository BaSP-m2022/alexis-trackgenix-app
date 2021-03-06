import {
  GET_EMPLOYEES_PENDING,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
  GET_DELETED_EMPLOYEES_PENDING,
  GET_DELETED_EMPLOYEES_SUCCESS,
  GET_DELETED_EMPLOYEES_ERROR,
  CREATE_EMPLOYEE_PENDING,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_PENDING,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_PENDING,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR,
  RESTORE_EMPLOYEE_PENDING,
  RESTORE_EMPLOYEE_SUCCESS,
  RESTORE_EMPLOYEE_ERROR,
  REMOVE_EMPLOYEE_PENDING,
  REMOVE_EMPLOYEE_SUCCESS,
  REMOVE_EMPLOYEE_ERROR
} from './constants';

export const getEmployeesPending = () => ({
  type: GET_EMPLOYEES_PENDING
});

export const getEmployeesSuccess = (data) => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: data
});

export const getEmployeesError = (error) => ({
  type: GET_EMPLOYEES_ERROR,
  payload: error
});

export const getDeletedEmployeesPending = () => ({
  type: GET_DELETED_EMPLOYEES_PENDING
});

export const getDeletedEmployeesSuccess = (data) => ({
  type: GET_DELETED_EMPLOYEES_SUCCESS,
  payload: data
});

export const getDeletedEmployeesError = (error) => ({
  type: GET_DELETED_EMPLOYEES_ERROR,
  payload: error
});

export const createEmployeePending = () => ({
  type: CREATE_EMPLOYEE_PENDING
});

export const createEmployeeSuccess = (data) => ({
  type: CREATE_EMPLOYEE_SUCCESS,
  payload: data
});

export const createEmployeeError = (error) => ({
  type: CREATE_EMPLOYEE_ERROR,
  payload: error
});

export const updateEmployeePending = () => ({
  type: UPDATE_EMPLOYEE_PENDING
});

export const updateEmployeeSuccess = (data) => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload: data
});

export const updateEmployeeError = (error) => ({
  type: UPDATE_EMPLOYEE_ERROR,
  payload: error
});

export const deleteEmployeePending = () => ({
  type: DELETE_EMPLOYEE_PENDING
});

export const deleteEmployeeSuccess = (data) => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload: data
});

export const deleteEmployeeError = (error) => ({
  type: DELETE_EMPLOYEE_ERROR,
  payload: error
});

export const restoreEmployeePending = () => ({
  type: RESTORE_EMPLOYEE_PENDING
});

export const restoreEmployeeSuccess = (data) => ({
  type: RESTORE_EMPLOYEE_SUCCESS,
  payload: data
});

export const restoreEmployeeError = (error) => ({
  type: RESTORE_EMPLOYEE_ERROR,
  payload: error
});

export const removeEmployeePending = () => ({
  type: REMOVE_EMPLOYEE_PENDING
});

export const removeEmployeeSuccess = (dataId) => ({
  type: REMOVE_EMPLOYEE_SUCCESS,
  payload: dataId
});

export const removeEmployeeError = (error) => ({
  type: REMOVE_EMPLOYEE_ERROR,
  payload: error
});
