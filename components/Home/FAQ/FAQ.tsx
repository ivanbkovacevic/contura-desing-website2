import React from 'react';
import style from './FAQ.module.scss'
import Accordion from '../../Reusable/Accordion/Accordion';
import { FAQ_LIST } from './constant';

const FAQ:React.FC = ({}) => {
    const faqList = () => {
        return FAQ_LIST.map((item) => {
          return (
            <Accordion 
                title={item.title}
                content={item.content} 
            />
          )
        })
    };

  return (
    <div className={style.wrapper}>
        <h2>FAQ</h2>
       {faqList()}
    </div>
  );
};

export default FAQ;