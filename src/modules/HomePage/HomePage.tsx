import React from 'react';
import cn from 'classnames';
import classes from './HomePage.module.scss';
import { ProductCard } from '../../components/ProductCard';
import { HeroSlider } from '../../components/HeroSlider';
import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { useProductsContext } from '../../controllers/products';
import { CarouselCards } from '../../components/CarouselCards';

export const HomePage: React.FC = () => {
  const { products } = useProductsContext();

  const handleAddToFavourites = (id: string) => {
    console.log(`Added to favourites: ${id}`);
  };

  const handleAddToCart = (id: string) => {
    console.log(`Added to cart: ${id}`);
  };

  return (
    <div className={classes.home}>
      <h1 className={classes.home__title}>Welcome to Nice Gadgets store!</h1>
      <div className={classes.slider}>
        <HeroSlider />
      </div>
      <section className={classes.phones_slider}>
        <div className={classes.section_top}>
          <h2 className={classes.section_top_title}>Brand new models</h2>
        </div>
        {!products.length ? (
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
          <CarouselCards />
          // <div className={classes.phones_slider_bottom}>
          //   <ProductCard
          //     product={products[0]}
          //     products={products}
          //     favourites={[products[3]]}
          //     cart={[]}
          //     onAddToFavourites={handleAddToFavourites}
          //     onAddToCart={handleAddToCart}
          //   />
          //   <ProductCard
          //     product={products[0]}
          //     products={products}
          //     favourites={[products[3]]}
          //     cart={[]}
          //     onAddToFavourites={handleAddToFavourites}
          //     onAddToCart={handleAddToCart}
          //   />
          //   <ProductCard
          //     product={products[0]}
          //     products={products}
          //     favourites={[products[3]]}
          //     cart={[]}
          //     onAddToFavourites={handleAddToFavourites}
          //     onAddToCart={handleAddToCart}
          //   />
          //   <ProductCard
          //     product={products[0]}
          //     products={products}
          //     favourites={[products[3]]}
          //     cart={[]}
          //     onAddToFavourites={handleAddToFavourites}
          //     onAddToCart={handleAddToCart}
          //   />
          // </div>
        )}
      </section>

      <section className={classes.category}>
        <h2 className={classes.section_top_title}>Shop by category</h2>

        <div className={classes.category_bottom}>
          <Link
            to="/phones"
            className={cn(classes.category_card, classes.category__column1)}
          >
            <div
              className={cn(
                classes.picture_wrapper,
                classes.picture_wrapper_color1,
              )}
            >
              <img
                src="\_old\v2\img\image6.png"
                alt=""
                className={classes.picture}
              />
            </div>
            <h3 className={classes.category__title}>Mobile phones</h3>
            <p className={classes.category_amount}>95 models</p>
          </Link>
          <Link
            to="/tablets"
            className={cn(classes.category_card, classes.category__column2)}
          >
            <div
              className={cn(
                classes.picture_wrapper,
                classes.picture_wrapper_color2,
              )}
            >
              <img
                src="\_old\v2\img\image5.png"
                alt=""
                className={classes.picture}
              />
            </div>
            <h3 className={classes.category__title}>Tablets</h3>
            <p className={classes.category_amount}>24 models</p>
          </Link>
          <Link
            to="/accessories"
            className={cn(classes.category_card, classes.category__column3)}
          >
            <div
              className={cn(
                classes.picture_wrapper,
                classes.picture_wrapper_color3,
              )}
            >
              <img
                src="\_old\v2\img\image7.png"
                alt=""
                className={classes.picture}
              />
            </div>
            <h3 className={classes.category__title}>Accessories</h3>
            <p className={classes.category_amount}>100 models</p>
          </Link>
        </div>
      </section>

      <section
        className={cn(classes.phones_slider, classes.phones_slider_hot_price)}
      >
        <div className={classes.section_top}>
          <h2 className={classes.section_top_title}>Hot prices</h2>
        </div>

        {!products.length ? (
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
          <div className={classes.phones_slider_bottom}>
            <ProductCard
              product={products[0]}
              products={products}
              favourites={[products[3]]}
              cart={[]}
              onAddToFavourites={handleAddToFavourites}
              onAddToCart={handleAddToCart}
            />
            <ProductCard
              product={products[0]}
              products={products}
              favourites={[products[3]]}
              cart={[]}
              onAddToFavourites={handleAddToFavourites}
              onAddToCart={handleAddToCart}
            />
            <ProductCard
              product={products[0]}
              products={products}
              favourites={[products[3]]}
              cart={[]}
              onAddToFavourites={handleAddToFavourites}
              onAddToCart={handleAddToCart}
            />
            <ProductCard
              product={products[0]}
              products={products}
              favourites={[products[3]]}
              cart={[]}
              onAddToFavourites={handleAddToFavourites}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
      </section>
    </div>
  );
};
