const itemsActions = {
    addNewItem : (newItem) => {
        const { type, value } = newItem;

        return {
            type : 'ADD_NEW_ITEM',
            payload : {
                type,
                 value
            }
        }
    }

}


export default itemsActions;