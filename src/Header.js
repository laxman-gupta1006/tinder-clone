import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import logo from './tinder.png'
import ForumIcon from '@material-ui/icons/Forum';
export default function Header(){

    return(
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>

            <img 
            src={logo}
            className='header__logo'
            alt="" />
            <IconButton>
            <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}