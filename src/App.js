import React from 'react';
import Header from './components/Header';
import SimpleTable from './components/SimpleTable';
import AddNewItem from './components/AddNewItem';
import itemsActions from './actions/itemsActions';

import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header headerText="This is sample"/>  
                <AddNewItem addNewItem={ this.props.addNewItem }/>              
                <SimpleTable items={ this.props.items } />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem : (newItem) => { dispatch(itemsActions.addNewItem(newItem))}
    }
}

const mapStateToProps = (state) => {
    return {
        items : state.items
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);