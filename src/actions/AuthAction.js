import FIREBASE from '../config/FIREBASE';
import {storeData} from '../utils/localStorage';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    // DISPATCH LOADING
    dispatch({
      type: REGISTER_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // AUTHENTICATE USER
    FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then(response => {
        const newData = {
          ...data,
          uid: response.user.uid,
        };

        // save to firebase database
        FIREBASE.database()
          .ref('users/' + response.user.uid)
          .set(newData);

        // DISPATCH SUCCESS
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: newData,
            errorMessage: false,
          },
        });

        // storing data local
        storeData('user', newData);
      })
      .catch(error => {
        // DISPATCH ERROR
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const loginUser = (email, password) => {};
