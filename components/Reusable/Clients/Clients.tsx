import React from "react";
import style from "./Clients.module.scss";
import { CLIENTS } from "./constants";
import Image from "next/image";
import cn from "classnames";

interface ClientsProps {
  backgroundtype?: string;
  centered?: string;
  contentCentered?: string;
  title?:boolean;
}

const Clients: React.FC<ClientsProps> = ({
  backgroundtype="white",
  centered = "yes",
  contentCentered,
  title,
}) => {
  const wrapperStyle = cn(
    style.wrapper,
    { [style.backgroundBlack]: backgroundtype === "black" },
    { [style.backgroundWhite]: backgroundtype === "white" }
  );
  const contentStyle = cn(style.contentWrapper, {
    [style.contentCenteredInSection]: contentCentered === "yes",
  });
  const generateClients = () => {
    return CLIENTS.map((item) => {
      return (
        <a href={item.link} target="_blank" className={style.clientWrapper} key={item.title}>
          <div className={style.image}>
            <Image src={item.img} alt={item.title} fill />
          </div>
        </a>
      );
    });
  };

  return (
    <section className={wrapperStyle} data-centered={centered}>
      <div className={contentStyle}>
        <div className={style.innerContentWrapper}>
         {title && <h5 className={style.title}>Clients</h5>}
          {generateClients()}
        </div>
      </div>
    </section>
  );
};

export default Clients;
