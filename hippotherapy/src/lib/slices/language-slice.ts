import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILanguageState } from '@/types/interfaces';

export const initialState: ILanguageState = {
  language: 'UA',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
