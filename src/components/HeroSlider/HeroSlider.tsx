import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.scss';
import { picturesPath } from './picturesPath';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow--next`}
      style={{ ...style }}
      onClick={onClick}
    >
      →
    </div>
  );
};

const CustomPrevArrow: React.FC<Props> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow--prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      ←
    </div>
  );
};

export const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  const { theme } = useTheme();

  return (
      <Slider {...settings} className={classNames("hero-slider", {
      ["lightTheme"]: theme === 'light',
      ["darkTheme"]: theme === 'dark',
    })}>
      {picturesPath.map(picture => (
        <div className="hero-slider__wrap" key={picture.id}>
          <picture>
            <source media="(min-width: 640px)" srcSet={picture.desktop} />
            <img
              src={picture.mobile}
              alt={picture.category}
              className="hero-slider__image"
            />
          </picture>
        </div>
      ))}
    </Slider>
  );
};
