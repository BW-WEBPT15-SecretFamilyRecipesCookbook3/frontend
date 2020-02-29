import React from 'react';
import { ProfileSide, SettingSide, FamilySide, BakerySide, FoodSide, AddSide } from '../AppComponents/AllBtn';
import Social from './social';
import './navi.css';

const Sidebar = () => {
    return(
        <aside className="aside">
            <Social />
            <ProfileSide />
            <SettingSide />
            <FamilySide />
            <BakerySide />
            <FoodSide />
            <AddSide />
        </aside>
    );
}

export default Sidebar;