import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import Button from './buliding-blocks/atoms/Button';

import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import logo from './assets/images/logo.png';

import './assets/scss/App.scss';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

const App = _ => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.comments.value);
  const comments = useSelector(state => state.comments.comments);

  useEffect(() => getData(), []);

  const getData = () => {
    axios.get(`http://localhost:3001/comments`)
    .then((res) => dispatch({ type: 'GET_COMMENTS', payload: res.data }))
    .catch((err) => console.log(err));
  }
  
  const removeData = () => dispatch({ type: 'REMOVE_COMMENTS' });

  const setInputValue = (value) => dispatch({ type: 'SET_VALUE', payload: value });

  const callRender = (comments) => {
    return (
      <div className="listContainer">
        {comments && comments.map((comment, index) => {
          return (
            <li key={index}>{index}:{comment.email}</li>
          )
        })}
      </div>
    )
  }

  return (
    <BrowserRouter>
      <StyleRoot>
        <div className="appContainer">
          <div className="imageContainer">
            <img src={logo} alt="noImage" height="100" />
          </div>
          <div className="boxContainer">
            {callRender(comments)}
          </div>
          <div className="pullDataContainer" style={styles.bounce}>
              <Button title={"Pull Data"} handleBtnClickRef={(e) => getData()} />
          </div>
          <div className="removeContainer">
            <input type="number" value={value} onChange={(e) => setInputValue(e.target.value)} />
            <Button title={"Remove"} handleBtnClickRef={() => removeData()} />
          </div>
        </div>
      </StyleRoot>
    </BrowserRouter>
  )
}

export default App
