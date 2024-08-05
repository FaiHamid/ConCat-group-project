import React from 'react';
import Slider from 'react-slick';
import cn from 'classnames';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import './CarouselCards.scss';

interface PropsArrow {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  topPlus?: boolean;
}

const CustomNextArrow: React.FC<PropsArrow> = ({
  className,
  style,
  onClick,
  topPlus = false,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        `${className} carousel-arrow carousel-arrow--next`,
        { top: topPlus },
        { 'light-theme': theme === 'light', 'dark-theme': theme === 'dark' }
      )}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src="/img/icons/Vector-right.svg" alt="" className="icon"/>
    </div>
  );
};

const CustomPrevArrow: React.FC<PropsArrow> = ({
  className,
  style,
  onClick,
  topPlus = false,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        `${className} carousel-arrow carousel-arrow--prev`,
        { top: topPlus },
        { 'light-theme': theme === 'light', 'dark-theme': theme === 'dark' }
      )}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src="/img/icons/Vector-left.svg" alt="" className="icon"/>
    </div>
  );
};

interface Props {
  products: Product[];
  topPlus?: boolean;
}

export const CarouselCards: React.FC<Props> = ({ products, topPlus }) => {
  const { theme } = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow topPlus={topPlus}/>,
    prevArrow: <CustomPrevArrow topPlus={topPlus}/>,
  };

  return (
    <div className={cn('carousel-container', { 'light-theme': theme === 'light', 'dark-theme': theme === 'dark' })}>
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Slider>
    </div>
  );
};
