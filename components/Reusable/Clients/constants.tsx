import AcroBits from "../Icons/AcroBits";

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
    img: "/assets/images/clients/codefactoCompany.svg",
    link: '',
  },
  {
    title: "clien4t 1",
    img: "/assets/images/clients/fromScratchLogo.svg",
    link: 'https://www.instagram.com/ffscratch/',
  },
  {
    title: "client5 1",
    img: "/assets/images/clients/getvoipCompany.svg",
    link: 'https://getvoip.com/',
  },
  {
    title: "client6 1",
    img: "/assets/images/clients/kernpunktCompany.svg",
    link: 'fwef',
  },
  {
    title: "client71",
    img: "/assets/images/clients/openSeaLogo.svg",
    link: 'https://opensea.io/',
  },
  {
    title: "client8 1",
    img: "/assets/images/clients/qclubCompany.svg",
    link: '',
  },
  {
    title: "client9 1",
    img: "/assets/images/clients/quanthubCompany.svg",
    link: '',
  },
  {
    title: "clien0t 1",
    img: "/assets/images/clients/rouviaCompany.svg",
    link: 'https://rouvia.com/',
  },
  {
    title: "clien-t 1",
    img: "/assets/images/clients/sekopakCompany.svg",
    link: 'https://sekopak.com/',
  },
];
