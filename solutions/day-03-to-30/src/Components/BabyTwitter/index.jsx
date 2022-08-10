import { useEffect, useState } from 'react';
import Tweet from '../Tweet';
import styles from './BabyTwitter.module.scss';

const BabyTwitter = () => {
  // States
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [inputHeight, setInputHeight] = useState('20px');
  const [newPost, setPost] = useState('');

  // Get random profile picture
  const getRandomProfilePicture = async () => {
    const response = await fetch('https://picsum.photos/48/');
    const picture = await response.url;
    return picture;
  };

  // Get random post picture (1200 x 675 pixels)
  const getRandomPostPicture = async (search) => {
    const response = await fetch(
      'https://source.unsplash.com/random/1200x675/?' + search
    );
    const picture = await response.url;
    return picture;
  };

  // Get random quotes
  const getQuotes = async () => {
    const response = await fetch(
      'https://api.quotable.io/quotes?maxLength=250&limit=30&page=' +
        (Math.floor(Math.random() * 63) + 1)
    );
    const quotes = await response.json();
    return quotes;
  };

  // Generate fake tweets
  useEffect(() => {
    const generateTweets = () => {
      getQuotes().then((quotes) => {
        Promise.all(
          quotes.results.map(async (quote, index) => {
            return await getRandomProfilePicture()
              .then(async (profilePicture) => {
                const author = {
                  picture: profilePicture,
                  name: quote.author,
                  at: quote.author.replace(/\s+/g, ''),
                };

                let result = {
                  user: author,
                  text: quote.content,
                  datetime: quote.dateModified,
                };

                // Add picture randomly (25% chances to have)
                if (Math.random() < 0.25) {
                  const tags = quote.content.split(' ');
                  result.image = await getRandomPostPicture(
                    tags.slice(0, Math.ceil(tags.length / 2)).join(',')
                  );
                }

                return result;
              })
              .then((tweet) => {
                return tweet;
              });
          })
        )
          .then((values) => {
            setTweets((oldTweets) => [...oldTweets, ...values]);
          })
          .then(() => setLoading(false));
      });
    };

    // Generate first tweets
    generateTweets();
  }, []);

  // On new post change update height of the input
  const handleChange = (e) => {
    setPost(e.target.value);
    // Automatically resize input
    setInputHeight('20px');
    setInputHeight(e.target.scrollHeight - 28 + 'px');
  };

  // Publish tweet
  const tweet = () => {
    const author = {
      picture: '/assets/images/profile_picture.jpg',
      name: 'Anonymous',
      at: 'anonymous',
    };
    setTweets((oldTweets) => [
      {
        user: author,
        text: newPost.trim(),
        datetime: new Date().toLocaleDateString(),
      },
      ...oldTweets,
    ]);
    setPost('');
    setInputHeight('20px');
  };

  return (
    <div className={styles.babyTwitter}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Accueil</h1>
        <p className={styles.bestTweets}>✨</p>
      </header>

      <section className={styles.postForm}>
        <img
          className={styles.profilePicture}
          src='/assets/images/profile_picture.jpg'
          alt='User profile'
        />
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <textarea
              className={styles.postInput}
              name='post'
              type='text'
              placeholder="What's happening?"
              value={newPost}
              onChange={handleChange}
              maxLength={280}
              style={{ height: inputHeight }}
            />
          </div>
          <div className={styles.actionsWrapper}>
            <div className={styles.postOptions}>
              <div className={styles.iconWrapper}>
                <i className={'ri-image-2-line ' + styles.disabled}></i>
              </div>
              <div className={styles.iconWrapper}>
                <i className={'ri-file-gif-line ' + styles.disabled}></i>
              </div>
              <div className={styles.iconWrapper}>
                <i className={'las la-poll-h ' + styles.disabled}></i>
              </div>
              <div className={styles.iconWrapper}>
                <i className={'ri-emotion-happy-line ' + styles.disabled}></i>
              </div>
              <div className={styles.iconWrapper}>
                <i className={'ri-calendar-event-line ' + styles.disabled}></i>
              </div>
              <div className={styles.iconWrapper}>
                <i className={'ri-map-pin-line ' + styles.disabled}></i>
              </div>
            </div>
            <div className={styles.othersWrapper}>
              <button
                className={styles.publishButton}
                type='button'
                disabled={!newPost.length > 0}
                onClick={tweet}
              >
                Tweeter
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.feed}>
        {loading ? (
          <div className={styles.spinner}></div>
        ) : (
          tweets.map((tweet, index) => {
            return <Tweet key={index} tweet={tweet} />;
          })
        )}
      </section>
    </div>
  );
};

export default BabyTwitter;
