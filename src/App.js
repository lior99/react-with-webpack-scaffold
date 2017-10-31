import React from 'react';
import Header from './components/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header headerText="Welcome to my app!"/>                
            </div>
        )
    }
}

export default App;