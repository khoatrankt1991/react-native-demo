console.log("REDUX");
var redux = require('redux');

var username = (state = null, action)=>{
    switch(action.type) {
        case "SIGN_IN": return action.username;
        case "SIGN_OUT": return null;
        default: return state;
    }
}
var reducer = redux.combineReducers({username});
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension?window.devToolsExtension():f=>f
));
store.subscribe(()=>console.log(store.getState()));
store.dispatch({type: "SIGN_IN", username: "khoatran"});
//store.dispatch({type: "SIGN_OUT"});

module.exports = store;