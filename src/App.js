import React from 'react';
import './App.css';
import {Grid} from 'react-flexbox-grid';
import ICO from './components/ICO';
import Header from './components/Header';
import {getICOs} from './utils';

const App = () =>{
    return (
        <div className="App">
            <Header />

            <Grid fluid>
                {getICOs().map((ico) => {
                    return <ICO key={ico.name} ico={ico}/>
                })}
            </Grid>
        </div>
    );
};

export default App;
