//external
import React from 'react';
import PropTypes from 'prop-types';
//js
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
//css
import styles from './Hero.scss';


const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
    <div className={styles.happyHour}>
      <HappyHourAd title='Happy Hour Now!' promoDescription='Discount -20%'/>
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
