import React, { Fragment } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    } 


    return ( 
        <Fragment>
            <input className="TodoSearch" value={searchValue} placeholder="Cebolla" onChange={onSearchValueChange} />
        </Fragment>
    );
}

export {TodoSearch};