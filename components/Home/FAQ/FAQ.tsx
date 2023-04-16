import React, { useState } from "react";
import style from "./FAQ.module.scss";
import Accordion from "../../Reusable/Accordion/Accordion";
import { FAQ_LIST } from "./constant";

const FAQ: React.FC = ({}) => {
  const [idAccordion, setIdAccordion] = useState<number | null>(null);

  const toggleAcc = (id: number) => {
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
          accClicked={() => toggleAcc(idx)}
          key={item.title}
          />
      );
    });
  };

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2>FAQ</h2>
        {faqList()}
      </div>
    </section>
  );
};

export default FAQ;
