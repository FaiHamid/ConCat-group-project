import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from './CursorSettings.module.scss';

export const CursorSettings: React.FC = () => {
  const [isCustomCursor, setIsCustomCursor] = useState<boolean>(() => {
    const saved = localStorage.getItem('customCursor');
    return saved === 'true';
  });

  const location = useLocation();

  useEffect(() => {
    const applyCustomCursorStyles = () => {
    console.log('Applying custom cursors');
    
    const elements = document.querySelectorAll('a, button, nav, ul, .custom-pointer, ._pageFormControl_1q2ih_215, .custom-arrow, .icon, ._settings_pxp5x_204, ._sortFormControl_lhtdd_214, ._pageFormControl_lhtdd_215, ._sortFormControl_1q2ih_214, ._pagination-arrowRight_1qjh9_260, ._pagination-arrowLeft_1qjh9_255, ._Logo_1ffcl_204, ._buttons__button-cart_1jn3i_212, ._section_top_title_xleik_214, ._BreadcrumbsHome_1lywe_239, _Breadcrumbs__link_1lywe_200, li, ._pagination-arrowRight_q12qv_260, ._pagination-arrowLeft_q12qv_255, ._footer__backToTop_6568c_245,  ._settings_pxp5x_204, img, ._settings_pxp5x_204, ._menu_pxp5x_230, ._cursorSettings_1i0xv_204, label, ._product__image, ._slider_1i0xv_227, ._Logo_tbssz_204, ._img_links_5ycob_385, ._menu_1e2pj_230._open_1e2pj_250, ._menuItem');
    const bodyElement = document.body;

    if (isCustomCursor) {
      bodyElement.style.cursor = `url('/img/icons/okcursor.png'), auto`;
      elements.forEach(el => {
        const computedStyle = getComputedStyle(el);
        if (computedStyle.cursor === 'pointer') {
          (el as HTMLElement).style.cursor = `url('/img/icons/pointer-cursor.png'), pointer`;
        } else {
          (el as HTMLElement).style.cursor = computedStyle.cursor;
        }
      });
    } else {
      bodyElement.style.cursor = 'auto';
      elements.forEach(el => {
        (el as HTMLElement).style.cursor = 'pointer';
      });
    }

    localStorage.setItem('customCursor', String(isCustomCursor));
  };

  applyCustomCursorStyles();
}, [isCustomCursor, location]);

  const handleCustomCursorToggle = () => {
    setIsCustomCursor(!isCustomCursor);
  };

  return (
    <div className={styles.cursorSettings}>
      <div className={styles.label}>Custom cursor</div>
      <label className={styles.switch}>
        <input type="checkbox" checked={isCustomCursor} onChange={handleCustomCursorToggle} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};
