import React, {useState} from 'react';
import DisplayView from './components/display/Display-view';
import ActionBar from './components/actionBar/ActionBar-view';
import LocalStorage from "./helpers/localStorage/localStorage";

import useStyles from './App-styles';

function App() {
    const appStyle = useStyles();
    const key = 'kids-points';
    const storage = new LocalStorage(key);

    const getValue = () => storage.getItem(key) || 0;

    // Initialize values
    const [value, useValue] = useState(getValue());

    // Handle click behavior for state update
    const HandleClick = (e) => {
        e.preventDefault();
        useValue(saveValue(e));
    }

    // Save state value
    const saveValue = (e) =>{
        let operation;
        if (e.currentTarget.name === '-') {
            operation = value - 1;
        } else {
            operation = value + 1;
        }
        storage.saveItem(operation);
        return operation;
    }

    return (
        <main className={appStyle.root}>
            <DisplayView modifier={appStyle.fillHeight} text={value}/>
            <ActionBar handleClick={HandleClick}/>
        </main>
    );
}

export default App;
