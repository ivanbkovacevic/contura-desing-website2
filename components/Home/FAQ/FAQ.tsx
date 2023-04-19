import React, { useState } from "react";
import Accordion from "../../Reusable/Accordion/Accordion";
import { FAQ_LIST } from "./constant";
import style from "./FAQ.module.scss";

const FAQ: React.FC = ({}) => {
  const [idAccordion, setIdAccordion] = useState<number | null>(null);

  const toggleAcc = (id: number) => {
    if (idAccordion === id) {
      setIdAccordion(null);
      return;
    }
    setIdAccordion(id);
  };
  const faqList = () => {
    return FAQ_LIST.map((item, idx) => {
      let showAccordion = false;
      if (idAccordion === idx) {
        showAccordion = true;
      }
      return (
        <Accordion
          title={item.title}
          content={item.content}
          show={showAccordion}
          arrowColor="white"
          accClicked={() => toggleAcc(idx)}
          key={item.title}
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
