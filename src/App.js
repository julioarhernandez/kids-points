import React, {useState} from 'react';
import DisplayView from './components/display/Display-view';
import ActionBar from './components/actionBar/ActionBar-view';
import useStyles from './App-styles';

function App() {
    const appStyle = useStyles();
    const [value, useValue] = useState(0);

    const HandleClick = (e) => {
        e.preventDefault();
        let operation;
         switch (e.currentTarget.name) {
            case '+':
                operation = value + 1;
                break;
            case '-':
                operation = value - 1;
        }
       useValue(operation);
    }

    return (
        <main className={appStyle.root}>
            <DisplayView modifier={appStyle.fillHeight} text={value}/>
            <ActionBar handleClick={HandleClick} />
        </main>
    );
}

export default App;
