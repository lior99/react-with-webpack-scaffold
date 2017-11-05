import React from 'react';

class AddNewItem extends React.Component {
    constructor() {
        super();
        this.addNewItem = this.addNewItem.bind(this);
    }


    addNewItem(event) {
        event.preventDefault();
        const type = this.refs.selectedType.value;
        const value = this.refs.selectedValue.value;
        this.props.addNewItem({type, value});
        this.refs.mainForm.reset();
    }

    render() {
        return (
            <div className="add-new-item-container">
                <form className="add-new-item-form" ref="mainForm">
                    <select ref="selectedType">
                        <option value="string">string</option>
                        <option value="number">number</option>
                        <option value="float">float</option>
                        <option value="object">object</option>
                        <option value="function">function</option>
                    </select>

                    <input type="text" placeholder="value" ref="selectedValue" />

                    <button onClick={ this.addNewItem }>Add New Item</button>
                </form>
            </div>
        )
    }

}

export default AddNewItem;