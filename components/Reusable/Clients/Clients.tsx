import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Client } from "./constants";
import cn from "classnames";
import style from "./Clients.module.scss";

interface ClientsProps {
  backgroundtype?: string;
  contentCentered?: string;
  title?: string;
  list: Client[];
  page?: string;
}

const Clients: React.FC<ClientsProps> = ({
  backgroundtype = "white",
  contentCentered,
  list,
  page,
}) => {
  const wrapperStyle = cn(
    style.wrapper,
    { [style.backgroundBlack]: backgroundtype === "black" },
    { [style.backgroundWhite]: backgroundtype === "white" }
  );
  const contentStyle = cn(style.contentWrapper, {
    [style.contentCenteredInSection]: contentCentered === "yes",
  });
  const animations = page !== 'about' ? 'zoom-in' : '';
  const generateClients = () => {
    return list.map((item, idx) => {
      const clientId = uuidv4();
      const idxOne = idx + 1;
      return (
        <a
          data-aos={animations}
          data-aos-delay={idxOne * 50}
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          href={item.link !== '' ? item.link : null}
          target="_blank"
          className={style.clientWrapper}
          key={clientId}
        >
          {item.img}
        </a>
      );
    });
  };

  return (
    <div className={wrapperStyle}>
      <div className={contentStyle}>
        <div className={style.innerContentWrapper}>
          {generateClients()}
        </div>
      </div>
    </div>
  );
};

export default Clients;
