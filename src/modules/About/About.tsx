import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import styles from './About.module.scss';
import { Item } from '../../types';
import { getItems } from '../../api/dataFromServer';
import { ThreeCircles } from 'react-loader-spinner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ImageSelection } from '../../components/ImageSelection';
import { ChoiceParams } from '../../components/ChoiceParams/ChoiceParams';
import { ItemTechDetails } from '../../components/ItemTechDetails/ItemTechDetails';

export const About: React.FC = () => {
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  const [item, setItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  
  // const navigate = useNavigate();

  // const urlArr = pathname.split('-');
  // const colorFromUrl = urlArr[urlArr.length - 1];
  // const capacityFromUrl = urlArr[urlArr.length - 2];

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

  // function goBack() {
  //   navigate({ pathname })
  // }

  return (
    <div className={styles.about}>
      <div className={styles.breadCrumbs}>
        <Breadcrumbs />
      </div>
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

        {item &&  (
          <>
          <section className={styles.images_container}>
            <ImageSelection
              item={item}
              activeImage={activeImage}
              onChangeActiveImage={setActiveImage}
            />
          </section>

          <section className={styles.choice_params}>
            <ChoiceParams item={item} />
          </section>

          <section className={styles.section_about}>
            <h3 className={styles.title_about}>About</h3>

            <div className={styles.text_container}>
              {item?.description.map(({ title, text }) => (
                <React.Fragment key={uuidv4()}>
                  <h4 className={styles.text_title}>{title}</h4>
                  <p className={styles.text_about}>{text}</p>
                </React.Fragment>
              ))}
            </div>
          </section>

          <section className={styles.section_tech}>
            <ItemTechDetails item={item} />
          </section>
          </>)}
        </>
      )}
    </div>
  );
};
