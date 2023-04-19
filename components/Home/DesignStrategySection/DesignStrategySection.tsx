import React, { useContext, useState } from "react";
import Accordion from "../../Reusable/Accordion/Accordion";
import Image from "next/image";
import { DESIGN_STRATEGY_LIST } from "./constants";
import style from "./DesignStrategySection.module.scss";

const DesignStrategySection: React.FC = ({}) => {
  const [idAccordion, setIdAccordion] = useState<number | null>(null);

  const toggleAcc = (id: number) => {
    if (idAccordion === id) {
      setIdAccordion(null);
      return;
    }
    setIdAccordion(id);
  };

  const accordions = () => {
    return DESIGN_STRATEGY_LIST.map((item, idx) => {
      let showAccordion = false;
      if (idAccordion === idx) {
        showAccordion = true;
      }

      return (
        <Accordion
          key={item.title}
          title={item.title}
          content={item.content}
          show={showAccordion}
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
