import React, {useEffect, useState} from 'react';
import DisplayView from './components/display/Display-view';
import ActionBar from './components/actionBar/ActionBar-view';
import Header from './components/header/Header-view';
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

    // Update value
    const getValue = () => storage.getItem(key) || 0;
    const [value, setValue] = useState(getValue());

    // Redeem Button logic
    const disableButton = () => value < minRedeemPoints;
    const [buttonDisabled, setButtonDisabled] = useState(disableButton);

    // Track counter value for animation
    const [animateCounter, setAnimateCounter] = useState(false);
    const [animateRedeem, setAnimateRedeem] = useState(false);

    useEffect(
        function UpdateButton(){
            setButtonDisabled(disableButton);
            setAnimateRedeem(!disableButton());
            setAnimateCounter(true);
        }, [value]
    );

    // Handle click behavior for state update
    const HandleClick = (e) => {
        e.preventDefault();
        setValue(saveValue(e));

    }

    // play UI feedback sounds
    const playSound = (type) => {
        const audio = new Audio(type);
        audio.play();
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
                animate={animateCounter}
                animateRedeem={animateRedeem}
                stopAnimation={() => setAnimateCounter(false)}
                clickHandler={RedeemPoints}
                isButtonDisabled={buttonDisabled}
            />
            <ActionBar
                handleClick={HandleClick}
                isButtonDisabled={false}
            />
        </main>
    );
}

export default App;
