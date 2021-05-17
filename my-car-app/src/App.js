

import React from 'react';
import Cars from "./Cars"; 
import CarForm from "./CarForm";


class App extends React.Component{
    render() {
        return (
            <div>
                <div className="Cars">
                    <Cars/>
                </div>
                <div className="Car-form">
                    <CarForm/>
                </div>
            </div>
        );
    }
}


export default App;
