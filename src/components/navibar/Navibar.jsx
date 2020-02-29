import React from 'react';
import { AllBtn, PizzaBtn, AsianBtn, SpanishBtn, BreakfastBtn, LunchBtn, DinnerBtn, SweetBtn, SnackBtn, SmoothieBtn, DrinkBtn } from '../AppComponents/AllBtn';
import './navi.css';

const Navibar = () => {
    return(
        <section className="nav-wrap">
        <div className="nav-box">
        <AllBtn />
        <PizzaBtn />
        <AsianBtn />
        <SpanishBtn />
        <BreakfastBtn />
        <LunchBtn />
        <DinnerBtn />
        <SweetBtn />
        <SnackBtn />
        <SmoothieBtn />
        <DrinkBtn />
      </div>
        </section>
    );
}

export default Navibar;