const initialState = 
    {
        items : [
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
    }
    
const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM': {
            const newId = state.items.length+1;
            const { type, value } = action.payload;

            let newItems = [
                ...state.items,
                {
                    id:newId,
                    text : value,
                    type
                  }];
            

            return { items : newItems }
        }

        default:
            return state;
    }
}


export default mainReducer;