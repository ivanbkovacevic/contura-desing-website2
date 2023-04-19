import React from "react";
import style from "./Clients.module.scss";
import { CLIENTS } from "./constants";
import cn from "classnames";

interface ClientsProps {
  backgroundtype?: string;
  contentCentered?: string;
  title?:boolean;
}

const Clients: React.FC<ClientsProps> = ({
  backgroundtype="white",
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
            {item.img}
        </a>
      );
    });
  };

  return (
    <div className={wrapperStyle}>
      <div className={contentStyle}>
        <div className={style.innerContentWrapper}>
         {title && <h5 className={style.title}>Clients</h5>}
          {generateClients()}
        </div>
      </div>
    </div>
  );
};

export default Clients;
