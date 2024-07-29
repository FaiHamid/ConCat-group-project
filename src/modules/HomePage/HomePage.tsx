import React from "react"
import cn from 'classnames';
import classes from './HomePage.module.scss';
import { HeroSlider } from '../../components/HeroSlider';
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    return(
        <div className={classes.home}>
          <h1 className={classes.home__title}>Welcome to Nice Gadgets store!</h1>
          <div className={classes.slider}>
            <HeroSlider />
          </div>
          <section className={classes.phones_slider}>
            <div className={classes.section_top}>
              <h2 className={classes.section_top_title}>Brand new models</h2>
            </div>

            <div className={classes.phones_slider_bottom}>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column1)}></div>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column2)}></div>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column3)}></div>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column4)}></div>
            </div>
          </section>

          <section className={classes.category}>
            <h2 className={classes.section_top_title}>Shop by category</h2>


            <div className={classes.category_bottom}>
              <Link to="/phones" className={cn(classes.category_card, classes.category__column1)}>
                <div className={cn(classes.picture_wrapper, classes.picture_wrapper_color1)}>
                  <img src="public\_old\v2\img\image6.png" alt="" className={classes.picture}/>
                </div>
                <h3 className={classes.category__title}>Mobile phones</h3>
                <p className={classes.category_amount}>95 models</p>
              </Link>
              <Link to="/tablets" className={cn(classes.category_card, classes.category__column2)}>
                <div className={cn(classes.picture_wrapper, classes.picture_wrapper_color2)}>
                  <img src="public\_old\v2\img\image5.png" alt="" className={classes.picture}/>
                </div>
                <h3 className={classes.category__title}>Tablets</h3>
                <p className={classes.category_amount}>24 models</p>
              </Link>
              <Link to="/accessories" className={cn(classes.category_card, classes.category__column3)}>
                <div className={cn(classes.picture_wrapper, classes.picture_wrapper_color3)}>
                  <img src="public\_old\v2\img\image7.png" alt="" className={classes.picture}/>
                </div>
                <h3 className={classes.category__title}>Accessories</h3>
                <p className={classes.category_amount}>100 models</p>
              </Link>
            </div>
          </section>

          <section className={cn(classes.phones_slider, classes.phones_slider_hot_price)}>
            <div className={classes.section_top}>
              <h2 className={classes.section_top_title}>Hot prices</h2>
            </div>

            <div className={classes.phones_slider_bottom}>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column1)}></div>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column2)}></div>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column3)}></div>
              <div className={cn(classes.phones_slider_bottom__card_example, classes.phones_slider_bottom__column4)}></div>
            </div>
          </section>
        </div>
    )
}

