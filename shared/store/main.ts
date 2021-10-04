import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

// reducers
import initReducer from './reducers/init-reducer';
import articlesReducer from './reducers/articles-reducer';

export const store = configureStore({
    reducer: {
        initReducer,
        articlesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
