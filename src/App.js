import React from 'react';
import Header from './components/Header';
// import ItemsList from './components/ItemsList';
import ItemsTable from './components/ItemsTable';

const items = [
    { id:1, text : "some string", type: "string" },
    { id:2, text : "35673", type: "number" },
    { id:3, text : "bla bla bla", type: "string" },
    { id:4, text : "4.23", type: "floating number" },
    { id:5, text : "{id:1, type:2}", type: "object" },
    { id:6, text : "function(){console.log('hello world!')}", type: "function" },
]

class App extends React.Component {
    render() {
        return (
            <div>
                <Header headerText="This is sample"/>                
                { /* <ItemsList items={items} /> */ }
                <ItemsTable items={ items } />
            </div>
        )
    }
}

export default App;