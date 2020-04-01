import React from 'react';
import classes from './../dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <li className={classes.dialogs__item + ' ' + classes.active}>
            <NavLink  to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    ) 
}



export default DialogItem;