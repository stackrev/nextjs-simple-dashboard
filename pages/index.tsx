import React from 'react';
import { Button } from '@material-ui/core';
import {
    useAppDispatch,
    useAppSelector,
    selectInitAppData,
    setInitAppData,
} from '@shared/store';

const Home = () => {
    const dispatch = useAppDispatch();
    const initAppData = useAppSelector(selectInitAppData);

    const changeInitData = (state: boolean) => {
        if (state) {
            setTimeout(() => {
                dispatch(setInitAppData(state));
            }, 1000);
        } else {
            dispatch(setInitAppData(state));
        }
    };

    const LoadBtn = !initAppData ? (
        <Button variant="contained" onClick={() => changeInitData(true)}>
            Load Initial Data
        </Button>
    ) : (
        <Button variant="outlined" onClick={() => changeInitData(false)}>
            Remove Initial Data
        </Button>
    );

    return (
        <>
            <h1> Dashboard </h1>
            <p>Initial data {initAppData ? '' : 'not'} received</p>

            {LoadBtn}
        </>
    );
};

export default Home;
