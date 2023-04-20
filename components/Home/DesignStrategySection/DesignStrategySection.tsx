import React, { useContext, useState } from "react";
import Accordion from "../../Reusable/Accordion/Accordion";
import Image from "next/image";
import { DESIGN_STRATEGY_LIST } from "./constants";
import style from "./DesignStrategySection.module.scss";

const DesignStrategySection: React.FC = ({}) => {
  const [idAccordion, setIdAccordion] = useState<number[]>([]);

  const toggleAcc = (id: number) => {
    if (idAccordion.includes(id)) {
      const newAcc = idAccordion.filter((item) => item !== id);
      setIdAccordion(newAcc);
      return;
    }
    setIdAccordion([...idAccordion, id]);
  };

  const accordions = () => {
    return DESIGN_STRATEGY_LIST.map((item, idx) => {
      return (
        <Accordion
          key={item.title}
          title={item.title}
          content={item.content}
          show={idAccordion.includes(idx)}
          accClicked={() => toggleAcc(idx)}
        />
      );
    });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.leftWrapper}>
        <h3 className={style.heading}>
          We create world-class digital products, web design, and branding.{" "}
        </h3>

        <div className={style.image}>
          <Image src="/assets/images/prolece.png" alt="prolece" fill />
        </div>
      </div>
      <div className={style.rightWrapper}>
        <div className={style.accordionsWrapper}>{accordions()}</div>
      </div>
    </div>
  );
};

export default DesignStrategySection;
