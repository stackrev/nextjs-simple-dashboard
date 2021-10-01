import '../styles/global.scss';

import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { store } from '@shared/store';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../theme';

import DefaultLayout from '../components/layout';
import LoginLayout from '../components/layout/login';

const layouts = {
    default: DefaultLayout,
    login: LoginLayout,
};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        const Layout =
            layouts[Component.layout || 'default'] ||
            ((children) => <>{children}</>);

        return (
            <React.Fragment>
                <Head>
                    <title>Simple Dashboard</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                    <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    />
                </Head>

                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </Provider>
            </React.Fragment>
        );
    }
}
