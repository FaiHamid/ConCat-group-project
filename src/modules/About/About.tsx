import React from 'react';
import styles from './About.module.scss';
import { Link } from 'react-router-dom';



export const About: React.FC = () => {
  // const navigate = useNavigate();
  // const { search } = useLocation();

// function goBack() {
//   navigate({ pathname })
// }

  return (
    <div className={styles.about}>
      <div className={styles.breadCrumbs}></div>
      <Link to="/"><img src="./img/Chevron(ArrowRight)" alt="ArrowBack" /> </Link>
    </div>
  );
};
