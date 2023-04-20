import AcroBits from "../Icons/Clients/AcroBits";
import Codefacto from "../Icons/Clients/Codefacto";
import FromScratch from "../Icons/Clients/FromScratch";
import Getoip from "../Icons/Clients/Getoip";
import KernPunkt from "../Icons/Clients/KernPunkt";
import OpenSea from "../Icons/Clients/OpenSea";
import QClub from "../Icons/Clients/QClub";
import QuantHub from "../Icons/Clients/QuantHub";
import Rouvia from "../Icons/Clients/Rouvia";
import SekoPak from "../Icons/Clients/SekoPak";

export interface Client {
  title: string;
  img: React.ReactNode;
  link:string;
}

export const CLIENTS: Client[] = [
  {
    title: "client1 1",
    img: <AcroBits />,
    link: 'https://acrobits.net/',
  },
  {
    title: "client 21",
    img: <Codefacto />,
    link: '',
  },
  {
    title: "clien4t 1",
    img: <FromScratch />,
    link: 'https://www.instagram.com/ffscratch/',
  },
  {
    title: "client5 1",
    img: <Getoip />,
    link: 'https://getvoip.com/',
  },
  {
    title: "client6 1",
    img: <KernPunkt />,
    link: 'fwef',
  },
  {
    title: "client71",
    img: <OpenSea />,
    link: 'https://opensea.io/',
  },
  {
    title: "client8 1",
    img: <QClub />,
    link: '',
  },
  {
    title: "client9 1",
    img: <QuantHub />,
    link: '',
  },
  {
    title: "clien0t 1",
    img: <Rouvia />,
    link: 'https://rouvia.com/',
  },
  {
    title: "clien-t 1",
    img: <SekoPak />,
    link: 'https://sekopak.com/',
  },
];
