import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './About.module.scss';
import { Item, Product } from '../../types';
import { getItems, getQuickProducts } from '../../api/dataFromServer';
import { ThreeCircles } from 'react-loader-spinner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ImageSelection } from '../../components/ImageSelection';
import { ChoiceParams } from '../../components/ChoiceParams/ChoiceParams';
import { ItemTechDetails } from '../../components/ItemTechDetails/ItemTechDetails';
import { CarouselCards } from '../../components/CarouselCards';
import classNames from 'classnames';
import { useTheme } from '../../contexts/ThemeContext';

export const About: React.FC = () => {
  const { pathname, state } = useLocation();
  const [item, setItem] = useState<Item | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');

  const { t } = useTranslation();

  const navigate = useNavigate();

  const category = pathname.split('/')[1];
  const itemId = pathname.split('/')[2];

  useEffect(() => {
    setIsLoading(true);
    setActiveImage('');
    getItems(category)
      .then(devices => {
        if (devices !== undefined) {
          setItem(devices.find(device => device.id === itemId) || null);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, [pathname]);

  useEffect(() => {
    getQuickProducts()
      .then(devices => {
        if (devices !== undefined) {
          setProducts(devices);
          setProduct(devices.find(device => device.itemId === itemId) || null);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  function goBack() {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean); 

    if (pathSegments.length > 1) {
        const parentPath = '/' + pathSegments.slice(0, -1).join('/');
        navigate({ pathname: parentPath, search: state?.search });
    } else {
        navigate('/');
    }
  }

  const newModels = [...products]
    .filter(
      device =>
        (device.fullPrice === item?.priceRegular ||
          device.price === item?.priceRegular ||
          device.capacity === item?.capacity) &&
        device.category === category,
    )
    .slice(0, 10);

  if (newModels.length < 10) {
    const firstTen = [...products]
      .filter(device => device.category === category)
      .slice(0, 10);
    newModels.push(...firstTen);
  }

  const { theme } = useTheme();
  const version = item?.namespaceId || 0;

  return (
    <div
      className={classNames(styles.about, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <div className={styles.breadCrumbs}>
        <Breadcrumbs />
      </div>
      <div className={styles.back_link} onClick={goBack}>
        <img
          src={`${theme === 'dark' 
            ? '/img/icons/Chevron(ArrowRight).svg'
            : '/img/icons/Vector-left.svg'
          }`}
          alt="ArrowBack"
          className={styles.img_back}
        />
        <p className={styles.back_text}>{t('aboutPage.back')}</p>
      </div>

      {isLoading ? (
        <ThreeCircles
          visible={true}
          height="200"
          width="200"
          color={`${theme === 'dark' ? `#F1F2F9` : '#27AE60'}`}
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass={styles.loader}
        />
      ) : (
        <>
          <h2 className={styles.title}>{item?.name}</h2>

          {item && (
            <>
              <section className={styles.images_container}>
                <ImageSelection
                  item={item}
                  activeImage={activeImage}
                  onChangeActiveImage={setActiveImage}
                />
              </section>

              <section className={styles.choice_params}>
                {product && <ChoiceParams item={item} product={product} />}
              </section>

              <section className={styles.section_about}>
                <h3 className={styles.title_about}>{t('aboutPage.about')}</h3>

                <div className={styles.text_container}>
                  {item?.description.map((_desc, index) => (
                    <React.Fragment key={uuidv4()}>
                      <h4 className={styles.text_title}>{t(`${version + index.toString()}.title`)}</h4>
                      <p className={styles.text_about}>{t(`${version + index.toString()}.text`)}</p>
                    </React.Fragment>
                  ))}
                </div>
              </section>

              <section className={styles.section_tech}>
                <ItemTechDetails item={item} />
              </section>

              <section className={styles.phones_slider}>
                <div className={styles.section_top}>
                  <h2
                    className={cn(styles.section_top_title, styles.top_title)}
                  >
                    {t('sliders.also')}
                  </h2>
                </div>
                <CarouselCards products={newModels} topPlus={true} />
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};
