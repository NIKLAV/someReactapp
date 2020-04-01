import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className = {classes.header}>
            <img className = {classes.header__img} src="https://dota2changer.com/data_list/Images/Pudge-CM.jpg" alt=""/>
        </header>
    )
}

export default Header;