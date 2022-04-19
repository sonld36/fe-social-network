import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/auth/userApi";

export const register = createAsyncThunk("auth/register", async (payload) => {
  const data = await (await userApi.register(payload)).data;

  localStorage.setItem("jwt", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;
})

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
    }
  }
})

// export const { } = userSlice.actions;
export default userSlice.reducer;