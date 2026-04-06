import { userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await userRequest.post("/auth/login/", user);   //Run the API call
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
}