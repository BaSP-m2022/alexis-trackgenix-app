import {
  getAdminsPending,
  getAdminsSuccess,
  getAdminsError,
  getDeletedAdminsPending,
  getDeletedAdminsSuccess,
  getDeletedAdminsError,
  addAdminPending,
  addAdminSucces,
  addAdminError,
  editAdminPending,
  editAdminSucces,
  editAdminError,
  deleteAdminPending,
  deleteAdminSucces,
  deleteAdminError
} from './actions';

export const getAdmins = () => {
  return (dispatch) => {
    dispatch(getAdminsPending());
    return fetch(`${process.env.REACT_APP_API_URL}/api/admins`, {
      headers: { token: sessionStorage.getItem('token') }
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(getAdminsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAdminsError(error.toString()));
      });
  };
};

export const getDeletedAdmins = () => {
  return (dispatch) => {
    dispatch(getDeletedAdminsPending());
    return fetch(`${process.env.REACT_APP_API_URL}/api/admins/deleted`, {
      headers: { token: sessionStorage.getItem('token') }
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(getDeletedAdminsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getDeletedAdminsError(error.toString()));
      });
  };
};

export const addAdmin = (newAdmin, setResponse) => {
  return (dispatch) => {
    dispatch(addAdminPending());
    return fetch(`${process.env.REACT_APP_API_URL}/api/admins`, {
      method: 'POST',
      body: newAdmin,
      headers: {
        'content-type': 'application/json',
        token: sessionStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error === false) {
          dispatch(addAdminSucces(response.data));
        }
        setResponse(response);
      })
      .catch((error) => {
        dispatch(addAdminError(error.toString()));
        setResponse(error);
      });
  };
};

export const editAdmin = (id, admin, setResponse) => {
  return (dispatch) => {
    dispatch(editAdminPending());
    return fetch(`${process.env.REACT_APP_API_URL}/api/admins/${id}`, {
      method: 'PUT',
      body: admin,
      headers: {
        'content-type': 'application/json',
        token: sessionStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(editAdminSucces(response.data));
        setResponse(response);
      })
      .catch((error) => {
        dispatch(editAdminError(error.toString()));
        setResponse(error);
      });
  };
};

export const delAdmin = (id, setResponse) => {
  return (dispatch) => {
    dispatch(deleteAdminPending());
    return fetch(`${process.env.REACT_APP_API_URL}/api/admins/${id}`, {
      method: 'DELETE',
      headers: { token: sessionStorage.getItem('token') }
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(deleteAdminSucces(response.data));
        setResponse(response);
      })
      .catch((error) => {
        dispatch(deleteAdminError(error.toString()));
        setResponse(error);
      });
  };
};
