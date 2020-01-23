import React, {useEffect, useState} from 'react';
import DisplayView from './components/display/Display-view';
import ActionBar from './components/actionBar/ActionBar-view';
import Header from './components/header/Header-view';
import { AppProvider } from "./context/AppContext";
import LocalStorage from "./helpers/localStorage/localStorage";
import './App.css';
import good from "./assets/sounds/good.mp3";
import bad from "./assets/sounds/bad.mp3";

import useStyles from './App-styles';

function App() {
    const appStyle = useStyles();
    const key = 'kids-points';
    const minRedeemPoints = 5;
    const storage = new LocalStorage(key);

    const getValue = () => storage.getItem(key) || 0;
    const [value, useValue] = useState(getValue());

    const couldRedeem = () => value < minRedeemPoints;
    const [buttonDisabled, useButtonDisabled] = useState(couldRedeem);

    useEffect(
        function UpdateButton(){
            useButtonDisabled(couldRedeem);
        }, [value]
    );

    // Handle click behavior for state update
    const HandleClick = (e) => {
        e.preventDefault();
        useValue(saveValue(e));

    }

    const vals = {
        hand: HandleClick
    };

    // play UI feedback sounds
    const playSound = (type) => {
        const audio = new Audio(type);
        audio.play();
    }


    const RedeemPoints = (e) => {
        e.preventDefault();
        useValue(saveValue(e));

    }

    // Save state value
    const saveValue = (e) => {
        let operation;
        switch (e.currentTarget.name) {
            case '-':
                operation = value - 1;
                playSound(bad);
                break;
            case '+':
                operation = value + 1;
                playSound(good);
                break
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
                    clickHandler={RedeemPoints}
                    isButtonDisabled={buttonDisabled}
            />
             <AppProvider value={{HandleClick}}>
                <ActionBar isButtonDisabled={false}/>
             </AppProvider>
        </main>
    );
}

export default App;
