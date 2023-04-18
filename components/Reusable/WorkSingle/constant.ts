import { COLORS, ORDER } from "../../../utils/globalConstans";

export interface Work {
  description: string;
  title: string;
  img: string;
  color: string;
  order: string;
  link: string;
}

export const WORK_LIST: Work[] = [
  {
    description: "Billboard Animal Welfare PSA",
    title: "Animal Welfare PSA",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.PALE_LEMON,
    order: ORDER.PICTURE_DOWN,
    link: "https://dribbble.com/shots/14976707-Billboard-Animal-Welfare-PSA",
  },
  {
    description: "Transport planning and management platform",
    title: "rouvia (previously, Forwardize)",
    img: "/assets/images/work/imageBilbordPrva.png",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_UP,
    link: "",
  },
  {
    description: "QClub application",
    title: "QCLUB",
    img: "/assets/images/work/imageBilbordPrva.png",
    color: COLORS.CHAMPAGNE_PINK,
    order: ORDER.PICTURE_DOWN,
    link: "https://lnkd.in/d2qrjvGG",
  },
  {
    description: "cryptoCrazy Beavers - NFT Collection",
    title: "OpenSea",
    img: "/assets/images/work/imageBilbordPrva.png",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/17424751-cryptoCrazy-Beavers-NFT",
  },
  {
    description: "GetVoIP ■ website redesign",
    title: "GetVoIP",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.MAGNOLIA_DARK,
    order: ORDER.PICTURE_UP,
    link: "https://getvoip.com/",
  },
  {
    description:
      "From Scratch, a Washington DC-based food truck and catering business",
    title: "From Scratch",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_DOWN,
    link: "https://www.facebook.com/ffscratch",
  },
  {
    description: "Sekopak Instagram posts",
    title: "SekoPak",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.ALICE_BLUE,
    order: ORDER.PICTURE_UP,
    link: "https://sekopak.com/",
  },
  {
    description: "Dashboard project ■ aragon/blockchain app",
    title: "aragon/blockchain app",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.MINT_CREAM,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/14907864-UI-UX-Dashboard-project",
  },
  {
    description: "CasinoGold app ■ main screens",
    title: "CasinoGold app",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.COSMIC_LATTE,
    order: ORDER.PICTURE_DOWN,
    link: "",
  },
  {
    description: "Euclid School ■ Landing Page",
    title: "quanthub",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.ALICE_BLUELIGHT,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/14305872-Euclid-School-Landing-Page",
  },
  {
    description: "Music Player ■ Mobile app",
    title: "Random app",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_UP,
    link: "",
  },
  {
    description: "Notorious Potato ■ Social Media",
    title: "Notorious Potato",
    img: "/assets/images/work/profesorImageDeseta.png",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_DOWN,
    link: "https://www.instagram.com/notoriouspotato_gr/",
  },
];
