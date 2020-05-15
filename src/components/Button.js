import React from 'react';
import styles from './Button.module.css';
/** 
 * Description: Button component
 * @property { string } text
 * @property { object } object
 * @property { string } user
*/
function Button(props) {
  const { text } = props;

  return (
    <button>
      {text}
    </button>
  );
}

export default Button;