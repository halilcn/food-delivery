import React,{} from 'react';

import "./Content.scss"
import Home from './home'

interface IProps{
}

const Content : React.FC<IProps> = (props) => {
 return (
  <div className="content-container">
   <Home/>
  </div>
 );
};

export default Content;
