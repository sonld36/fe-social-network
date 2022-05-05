import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth/authApi";

export const register = createAsyncThunk("auth/register", async (payload) => {
  const data = await (await authApi.register(payload)).data;

  localStorage.setItem("jwt", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;
});

export const login = createAsyncThunk("auth/login", async(payload) => {
  const data = (await authApi.login(payload)).data;

  localStorage.setItem("jwt", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;

});


export const userSlice = createSlice({
  name: "user",
  initialState: {
    setting: {},
    current: {}
  },
  reducers: {
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    }
  }
})

// export const { } = userSlice.actions;
export default userSlice.reducer;