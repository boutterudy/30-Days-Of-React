import { twitterFormatDate } from '../../Utils/dates';
import styles from './Tweet.module.scss';

const Tweet = ({ tweet, ...otherProps }) => {
  return (
    <div className={styles.tweet} {...otherProps}>
      <div className={styles.profilePictureWrapper}>
        <img
          src={tweet.user.picture}
          alt={'Profile picture of ' + tweet.user.name}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.details}>
          <h1 className={styles.authorName}>{tweet.user.name}</h1>
          <p className={styles.authorAt}>@{tweet.user.at}</p>
          <p className={styles.separator}>·</p>
          <p className={styles.date}>{twitterFormatDate(tweet.datetime)}</p>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>{tweet.text}</p>
          {tweet.image !== undefined ? (
            <img src={tweet.image} alt='Random for baby twitter feed' />
          ) : null}
        </div>
        <div className={styles.actions}></div>
      </div>
    </div>
  );
};

export default Tweet;
