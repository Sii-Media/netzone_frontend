import { setUser, clearUser } from "./userSlice";

const API_BASE_URL = "https://net-zoon.onrender.com";

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      const { result, token } = data;
      dispatch(setUser({ user: result, token }));
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      const { result, token } = data;
      dispatch(setUser({ user: result, token }));
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(clearUser());
};
