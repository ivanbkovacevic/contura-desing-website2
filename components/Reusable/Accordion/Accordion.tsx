import React, { useState } from 'react';
import cn from 'classnames'
import style from './Accordion.module.scss'


interface AccordionProps {
   title: string;
   content: string
}
const Accordion:React.FC<AccordionProps> = ({title, content}) => {
const[showAccordion, setShowAccordion] = useState<boolean>(false);

const contentStyle = cn(
    style.content,
    {[style.hide]: !showAccordion}
);

  return (
    <div className={style.wrapper}>
      <button onClick={() => setShowAccordion(!showAccordion)}>
        {title} X
      </button>
        <div className={contentStyle}>
         {content}
        </div>
    </div>
  )
}

export default Accordion