import Adobe from "../Icons/BigCompany/Adobe";
import Amazon from "../Icons/BigCompany/Amazon";
import FaceBook from "../Icons/BigCompany/FaceBook";
import Framer from "../Icons/BigCompany/Framer";
import GitHub from "../Icons/BigCompany/GitHub";
import Google from "../Icons/BigCompany/Google";
import Microsoft from "../Icons/BigCompany/Microsoft";
import SketchBlack from "../Icons/BigCompany/SketchBlack";
import Stripe from "../Icons/BigCompany/Stripe";
import Twitch from "../Icons/BigCompany/Twitch";
import Uber from "../Icons/BigCompany/Uber";
import Webflow from "../Icons/BigCompany/Webflow";
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

export const BIG_COMPANYES: Client[] = [
  {
    title: "clien-t 1",
    img: <FaceBook />,
    link: 'https://facebook.com/',
  },
  {
    title: "client 21",
    img: <Adobe />,
    link: '',
  },
  {
    title: "clien4t 1",
    img: <Amazon />,
    link: 'https://www.amazon.com',
  },
  {
    title: "client5 1",
    img: <Framer />,
    link: '',
  },
  {
    title: "client6 1",
    img: <GitHub />,
    link: 'fwef',
  },
  {
    title: "client71",
    img: <Google />,
    link: 'https://google.com',
  },
  {
    title: "client8 1",
    img: <Microsoft />,
    link: '',
  },
  {
    title: "client9 1",
    img: <SketchBlack />,
    link: '',
  },
  {
    title: "clien0t 1",
    img: <Stripe />,
    link: '/',
  },
  {
    title: "clien-t 1",
    img: <Twitch />,
    link: '',
  },
  {
    title: "clien-t 1",
    img: <Uber />,
    link: '',
  },
  {
    title: "clien-t 1",
    img: <Webflow />,
    link: '',
  },
];