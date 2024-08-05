import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import classes from './HomePage.module.scss';
import { HeroSlider } from '../../components/HeroSlider';
import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { Product } from '../../types';
import { getProducts } from '../../api/dataFromServer';
import { CarouselCards } from '../../components/CarouselCards';
import { useTheme } from '../../contexts/ThemeContext';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const newModels = [...products].filter(item => item.id % 3 !== 0 ).sort((a, b) => b.price - a.price).slice(0, 10);
  const hotPriceModels = [...products]
    .filter(item => item.id % 3 === 0 )
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return (
    <div className={cn(classes.home, {
      [classes.lightTheme]: theme === 'light',
      [classes.darkTheme]: theme === 'dark',
    })}>
      <h1 className={classes.home__title}>Welcome to Nice Gadgets store!</h1>
      <div className={classes.slider}>
        <HeroSlider />
      </div>
      <section className={classes.phones_slider}>
        <div className={classes.section_top}>
          <h2 className={cn(classes.section_top_title, classes.top_title)}>Brand new models</h2>
        </div>
        {isLoading ? (
          <ThreeCircles
            visible={true}
            height="200"
            width="200"
            color="#ffffff"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass={classes.loader}
          />
        ) : (
          <CarouselCards products={newModels} topPlus={true}/>
        )}
      </section>

      <section className={classes.category}>
        <h2 className={classes.section_top_title}>Shop by category</h2>
        <div className={classes.category_bottom}>
          <Link to="/phones" className={cn(classes.category_card, classes.category__column1)}>
            <div className={cn(classes.picture_wrapper, classes.picture_wrapper_color1)}>
              <img src="\_old\v2\img\image6.png" alt="" className={classes.picture} />
            </div>
            <h3 className={classes.category__title}>Mobile phones</h3>
            <p className={classes.category_amount}>95 models</p>
          </Link>
          <Link to="/tablets" className={cn(classes.category_card, classes.category__column2)}>
            <div className={cn(classes.picture_wrapper, classes.picture_wrapper_color2)}>
              <img src="\_old\v2\img\image5.png" alt="" className={classes.picture} />
            </div>
            <h3 className={classes.category__title}>Tablets</h3>
            <p className={classes.category_amount}>24 models</p>
          </Link>
          <Link to="/accessories" className={cn(classes.category_card, classes.category__column3)}>
            <div className={cn(classes.picture_wrapper, classes.picture_wrapper_color3)}>
              <img src="\_old\v2\img\image7.png" alt="" className={classes.picture} />
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
        {isLoading ? (
          <ThreeCircles
            visible={true}
            height="200"
            width="200"
            color="#ffffff"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass={classes.loader}
          />
        ) : (
          <CarouselCards products={hotPriceModels} />
        )}
      </section>
    </div>
  );
};