import React, { useState } from "react";
import Accordion from "../../Reusable/Accordion/Accordion";
import style from "./FAQ.module.scss";
import { FAQ_LIST } from "./constant";

const FAQ: React.FC = ({}) => {
  const [idAccordion, setIdAccordion] = useState<number[]>([]);

  const toggleAcc = (id: number) => {
    if (idAccordion.includes(id)) {
      const newAcc = idAccordion.filter((item) => item !== id);
      setIdAccordion(newAcc);
      return;
    }
    setIdAccordion([...idAccordion, id]);
  };
  const faqList = () => {
    return FAQ_LIST.map((item, idx) => {
      return (
        <Accordion
          title={item.title}
          content={item.content}
          show={idAccordion.includes(idx)}
          arrowColor="white"
          accClicked={() => toggleAcc(idx)}
          key={item.title}
          variant="FAQ"
        />
      );
    });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2>FAQ</h2>
        {faqList()}
      </div>
    </div>
  );
};

export default FAQ;
