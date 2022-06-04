import { CHANGE_THEME } from "./action";

let theme = JSON.parse(localStorage.getItem("theme"));

const init_store = {
    theme:theme
}

export const reducer = (store = init_store,{type}) => {
    if(type == CHANGE_THEME){
        return {...store,theme:(!store.theme)};
    }else{
        return store;
    }
}