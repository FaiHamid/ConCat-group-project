import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import styles from './ImageSelection.module.scss';
import { Item } from '../../types';

interface Props {
  item: Item;
  activeImage: string;
  onChangeActiveImage: (image: string) => void;
}

export const ImageSelection: React.FC<Props> = ({
  item,
  activeImage,
  onChangeActiveImage,
}) => {
  return (
    <>
      <div className={styles.small_images}>
        {item?.images.map((image, index) => (
            <img
              key={uuidv4()}
              src={`/${image}`}
              alt={item.name}
              className={cn(styles.small_img, {
                [styles.isActiveImg]: activeImage
                  ? activeImage === `/${image}`
                  : index === 0,
              })}
              onClick={() => onChangeActiveImage(`/${image}`)}
            />
          )
        )}
      </div>

      <div className={styles.big_image_wrapper}>
        <img
          src={`${activeImage}` || `/${item?.images[0]}`}
          alt={item?.name}
          className={styles.big_image}
        />
      </div>
    </>
  );
};
