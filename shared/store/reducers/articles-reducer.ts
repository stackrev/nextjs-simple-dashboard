import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { IArticle } from 'interfaces';

import type { RootState } from '../main';

// initial data value
const initialState: {
    articles: IArticle[];
    count: number;
} = {
    articles: [],
    count: 0,
};

export const articleSlice: Slice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setArticles(state, action: PayloadAction<IArticle[]>) {
            state.articles = action.payload;
            state.count = action.payload.length | 0;
        },
    },
});

// actions export
export const { setArticles } = articleSlice.actions;

// getters export
export const rdxGetArticles = (state: RootState) => {
    return state.articlesReducer.articles;
};
export const rdxGetArticlesCount = (state: RootState) => {
    return state.articlesReducer.count;
};

// exporting the reducer here, as we need to add this to the store
export default articleSlice.reducer;
