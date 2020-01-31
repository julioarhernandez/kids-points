import React, {useEffect, useState} from 'react';
import DisplayView from './components/display/Display-view';
import ActionBar from './components/actionBar/ActionBar-view';
import Header from './components/header/Header-view';
import { playBad, playGood } from "./helpers/playSound";
import { Provider } from "react-redux";
import store from "./redux/store";
import LocalStorage from "./helpers/localStorage/localStorage";
import './App.css';

import useStyles from './App-styles';

function App() {
    const appStyle = useStyles();
    const key = 'kids-points';
    const minRedeemPoints = 5;
    const storage = new LocalStorage(key);

    // Update value
    const getValue = () => storage.getItem(key) || 0;
    const [value, setValue] = useState(getValue());

    // Redeem Button logic
    const disableButton = () => value < minRedeemPoints;
    const [buttonDisabled, setButtonDisabled] = useState(disableButton);

    // Track counter value for animation
    const [animateCounter, setAnimateCounter] = useState(false);
    const [animateRedeem, setAnimateRedeem] = useState(false);

    useEffect( () =>{
        setButtonDisabled(disableButton);
        setAnimateRedeem(!disableButton());
        setAnimateCounter(true);
    }, [value]);

    // Handle click behavior for state update
    const HandleClick = (e) => {
        e.preventDefault();
        setValue(saveValue(e));

    }

    const RedeemPoints = (e) => {
        e.preventDefault();
        setValue(saveValue(e));
    }

    // Save state value
    const saveValue = (e) => {
        let operation;
        switch (e.currentTarget.name) {
            case '-':
                operation = value - 1;
                playBad();
                break;
            // case '+':
            //     operation = value + 1;
            //     playGood();
            //     break
            case 'redeem':
                operation = value - 5;
                break;
            default:
                break;
        }
        storage.saveItem(operation);
        return operation;
    }

    return (
        <main className={appStyle.mainComponent}>
            <Header title="Points Kid"/>
            <DisplayView
                modifier={appStyle.displayComponent}
                text={value}
                animate={animateCounter}
                animateRedeem={animateRedeem}
                stopAnimation={() => setAnimateCounter(false)}
                clickHandler={RedeemPoints}
                isButtonDisabled={buttonDisabled}
            />
            <Provider store={store}>
                <ActionBar
                    handleClick={HandleClick}
                    isButtonDisabled={false}
                />
            </Provider>
        </main>
    );
}

export default App;
