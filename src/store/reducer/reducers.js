import { combineReducers } from "redux";
import { Fname, Lname, Profession,Mname,Age } from "./reducer";

export const reducers = combineReducers({
    firstName: Fname,
    lastName: Lname,
    middlename: Mname,
    profession:Profession,
    age:Age

})