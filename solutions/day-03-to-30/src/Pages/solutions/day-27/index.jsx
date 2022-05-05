import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { lightOrDark } from '../../../Utils/colors';
import styles from './day-27.module.scss';

const Day27 = () => {
  const [colorsNumber, setColorsNumber] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Generate colors function
  const generateColors = () => {
    let number = colorsNumber !== '' ? colorsNumber : 20;
    let hexaColors = [];
    for (let i = 0; i < number; i++) {
      let str = '0123456789abcdef';
      let color = '';
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
      }
      hexaColors.push('#' + color);
    }
    return hexaColors;
  };

  // Show copied to clipboard message
  const showSnackbarMessage = () => {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  const [colors, setColors] = useState(generateColors());

  // Check if valid number of colors
  const onChange = (e) => {
    const reg = /^$|^([1-9][0-9]{0,2}|1000)$/;
    const newValue = e.target.value;
    if (reg.test(newValue)) {
      setColorsNumber(newValue);
    }
  };

  return (
    <>
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>30 Days Of React</h1>
          <h2 className={styles.detail}>Hexadecimal Colors</h2>
        </header>
        <section className={styles.content}>
          <section className={styles.generator}>
            <input
              type='number'
              placeholder='Number of colors'
              className={styles.searchBar}
              value={colorsNumber}
              onChange={onChange}
            />
            <button
              className={styles.generateButton}
              onClick={() => setColors(generateColors())}
            >
              Generate
            </button>
          </section>
          <section className={styles.colors}>
            {colors.length > 0 &&
              colors.map((color, index) => (
                <div
                  key={index}
                  className={styles.single}
                  style={{
                    backgroundColor: color,
                    color: lightOrDark(color) === 'light' ? 'black' : 'white',
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(color);
                    showSnackbarMessage();
                  }}
                >
                  <p>{color}</p>
                  <i class='ri-clipboard-line'></i>
                </div>
              ))}
          </section>
        </section>
      </div>
      <div id='snackbar' className={showSnackbar ? 'show' : ''}>
        <i class='ri-check-line'></i> Copied
      </div>
    </>
  );
};

export default Day27;
