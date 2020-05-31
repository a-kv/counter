import {createStore} from "redux";
import reducer from "./redusers/reduser";

const store = createStore(reducer)
export default store