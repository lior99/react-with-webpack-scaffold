import React from 'react';
import Header from './components/Header';
import SimpleTable from './components/SimpleTable';

const items = [
    { id:1, text : "some string", type: "string" },
    { id:2, text : "35673", type: "number" },
    { id:3, text : "bla bla bla", type: "string" },
    { id:4, text : "4.23", type: "float" },
    { id:5, text : "{id:1, type:2}", type: "object" },
    { id:6, text : "function(){console.log('hello world!')}", type: "function" },
    { id:7, text : "sinetsdfjhsd fkjshfksdf", type: "string" },
    { id:8, text : "sinetsdfjhsd fkjshfksdf", type: "string" },
    { id:9, text : "mcmcnmvncmvcv", type: "string" },
    { id:10, text : "234d%dfgg(*&(%d", type: "string" },
    { id:11, text : "123.4", type: "float" },
    { id:12, text : "30.5%", type: "string" },
]


class App extends React.Component {
    render() {
        return (
            <div>
                <Header headerText="This is sample"/>  
                <SimpleTable items={ items } />
            </div>
        )
    }
}

export default App;