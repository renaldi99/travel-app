import {REGISTER_USER} from '../../actions/AuthAction';

const initialState = {
  registerUserLoading: false,
  registerUserResult: false,
  registerUserError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUserLoading: action.payload.loading,
        registerUserResult: action.payload.data,
        registerUserError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
