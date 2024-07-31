import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import styles from './About.module.scss';
import { Item } from '../../types';
import { getItems } from '../../api/dataFromServer';
import { ThreeCircles } from 'react-loader-spinner';

export const About: React.FC = () => {
  // const navigate = useNavigate();
  const { pathname } = useLocation();


  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');

  const category = pathname.split('/')[1];
  const itemId = pathname.split('/')[2];

  
  console.log('act', activeImage);


  useEffect(() => {
    getItems(category)
      .then(setItems)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  
  const item = items.find(oneItem => oneItem.id === itemId);
  console.log(item);
  

  // function goBack() {
  //   navigate({ pathname })
  // }

  return (
    <div className={styles.about}>
      <div className={styles.breadCrumbs}></div>
      <Link to="/" className={styles.back_link}>
        <img src="/img/icons/Chevron(ArrowRight).svg" alt="ArrowBack" />
        <p className={styles.back_text}>Back</p>
      </Link>

      {isLoading ? (
        <ThreeCircles
          visible={true}
          height="200"
          width="200"
          color="#ffffff"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass={styles.loader}
        />
      ) : (
        <>
          <h2 className={styles.title}>{item?.name}</h2>

          <section className={styles.images_container}>
            <div className={styles.small_images}>
              {item?.images.map(image => (
                <img
                  key={uuidv4()}
                  src={image}
                  alt={item.name}
                  className={cn(styles.small_img, { 'styles.active': false })}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>

            <div className={styles.big_image}>
              <img src={activeImage || item?.images[0]} alt={item?.name} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};
