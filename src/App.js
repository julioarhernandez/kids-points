import React from 'react';
import DisplayView from './components/display/Display-view';
import ActionBar from './components/actionBar/ActionBar-view';
import Header from './components/header/Header-view';
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';

import useStyles from './App-styles';

function App() {
    const appStyle = useStyles();
    return (
        <main className={appStyle.mainComponent}>
            <Header title="Points Kid"/>
            <Provider store={store}>
                <DisplayView modifier={appStyle.displayComponent} />
                <ActionBar isButtonDisabled={false}/>
            </Provider>
        </main>
    );
}

export default App;
