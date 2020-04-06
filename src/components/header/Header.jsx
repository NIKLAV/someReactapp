import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return (
        <header className = {classes.header}>
            <img className = {classes.header__img} src="https://dota2changer.com/data_list/Images/Pudge-CM.jpg" alt=""/>
            
            <div className={classes.login}>
             {props.isAuth
              
                ?  props.login
                : <NavLink className={classes.login__item} to={'/login'}>LOGIN</NavLink>
             }
            </div>
        </header>
    )
}

export default Header;