import React,{} from 'react';

import style from "./LeftMenu.module.scss"

interface IProps{
}

const LeftMenu : React.FC<IProps> = (props) => {
 return (
  <div className={style.leftMenuContainer}>
      <div className={style.item}>
          <i className="fa-solid fa-moon"></i>
      </div>
      <div className="item">
          <i className="fa-solid fa-moon"></i>
      </div>
      <div className="item">
          <i className="fa-solid fa-moon"></i>
      </div>
      <div className="item">
          <i className="fa-solid fa-moon"></i>
      </div>
  </div>
 );
};

export default LeftMenu;
