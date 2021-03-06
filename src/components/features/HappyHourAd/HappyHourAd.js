//external 
import React from 'react';
import PropTypes from 'prop-types';
//css
import styles from './HappyHourAd.scss';
//utils
import {formatTime} from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);
  }
    static propTypes = {
      title: PropTypes.string,
      promoDescription: PropTypes.string,
    }
    getCountdownTime(){
      const currentTime = new Date();
      const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
      if(currentTime.getUTCHours() >= 12){
        nextNoon.setUTCDate(currentTime.getUTCDate()+1);
      }
    
      return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
    }
    render() {
      const {title, promoDescription} = this.props;
      const timeCount = this.getCountdownTime();
      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.promoDescription}>{timeCount > 82800 ? promoDescription : formatTime(timeCount)}</div>
        </div>
      );
    }
}

export default HappyHourAd;