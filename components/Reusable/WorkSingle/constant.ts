import { COLORS, ORDER } from "../../../utils/globalConstans";

export interface Work {
  description: string;
  descFontColor: string;
  title: string;
  subtitle: string;
  img: string;
  imgClass?: string;
  color: string;
  order: string;
  link: string;
}

export const WORK_LIST_HOME: Work[] = [
  {
    description: "Billboard Animal Welfare PSA",
    descFontColor: COLORS.JET,
    title: "Animal Welfare PSA",
    subtitle: "Billboard",
    img: "/assets/images/workSections/billboardAnimal.png",
    imgClass: "image1",
    color: COLORS.PALE_LEMON,
    order: ORDER.PICTURE_DOWN,
    link: "https://dribbble.com/shots/14976707-Billboard-Animal-Welfare-PSA",
  },
  {
    description: "Transport planning and management platform",
    descFontColor: COLORS.JET,
    title: "Rouvia (previously, Forwardize)",
    subtitle: "UX/UI, Dahsboard System",
    img: "/assets/images/workSections/rouviaPlatform.png",
    imgClass: "image2",
    color: COLORS.LAVENDER_BLUSH,
    order: ORDER.PICTURE_UP,
    link: "https://rouvia.com/",
  },
  {
    description: "QClub application",
    descFontColor: COLORS.WHITE,
    title: "QCLUB",
    subtitle: "UX/UI, Mobile App",
    img: "/assets/images/workSections/qclubApp.png",
    imgClass: "image3",
    color: COLORS.VAN_DYKE,
    order: ORDER.PICTURE_DOWN,
    link: "https://lnkd.in/d2qrjvGG",
  },
  {
    description: "cryptoCrazy Beavers - NFT Collection",
    descFontColor: COLORS.JET,
    title: "OpenSea",
    subtitle: "Illustration, ",
    img: "/assets/images/workSections/cryptoCreazyBeavers.png",
    imgClass: "image4",
    color: COLORS.BUS_SCHOOL_YELLOW,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/17424751-cryptoCrazy-Beavers-NFT",
  },
  {
    description: "GetVoIP ■ website redesign",
    descFontColor: COLORS.WHITE,
    title: "GetVoIP",
    subtitle: "UX/UI, Website",
    img: "/assets/images/workSections/getvoipLandingPage.png",
    imgClass: "image5",
    color: COLORS.OXFORD_BLUE,
    order: ORDER.PICTURE_UP,
    link: "https://getvoip.com/",
  },
  {
    description:
      "From Scratch, a Washington DC-based food truck and catering business",
    descFontColor: COLORS.WHITE,
    title: "From Scratch",
    subtitle: "Truck Warp Design, UI/UX, Web, Branding, Visuals, Illustration",
    img: "/assets/images/workSections/fromScratch.png",
    imgClass: "image6",
    color: COLORS.RED_WOOD_E19,
    order: ORDER.PICTURE_DOWN,
    link: "https://www.facebook.com/ffscratch",
  },
  {
    description: "Sekopak Instagram posts",
    descFontColor: COLORS.JET,
    title: "SekoPak",
    subtitle: "Illustrations, e-book, banners, flag, cans, posts...",
    img: "/assets/images/workSections/sekopak.png",
    imgClass: "image7",
    color: COLORS.ALICE_BLUE,
    order: ORDER.PICTURE_UP,
    link: "https://sekopak.com/",
  },
  {
    description: "Dashboard project ■ aragon/blockchain app",
    descFontColor: COLORS.JET,
    title: "Aragon/blockchain app",
    subtitle: "UX/UI, Dashboard",
    img: "/assets/images/workSections/dashboardCryptoYogy.png",
    imgClass: "image8",
    color: COLORS.MINT_CREAM,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/14907864-UI-UX-Dashboard-project",
  },
];

export const WORK_LIST_WORK: Work[] = [
  {
    description: "Billboard Animal Welfare PSA",
    descFontColor: COLORS.JET,
    title: "Animal Welfare PSA",
    subtitle: "Billboard",
    img: "/assets/images/workSections/billboardAnimal.png",
    imgClass: "image1",
    color: COLORS.PALE_LEMON,
    order: ORDER.PICTURE_DOWN,
    link: "https://dribbble.com/shots/14976707-Billboard-Animal-Welfare-PSA",
  },
  {
    description: "Transport planning and management platform",
    descFontColor: COLORS.JET,
    title: "rouvia (previously, Forwardize)",
    subtitle: "UX/UI, Dahsboard System",
    img: "/assets/images/workSections/rouviaPlatform.png",
    imgClass: "image2",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_UP,
    link: "https://rouvia.com/",
  },
  {
    description: "QClub application",
    descFontColor: COLORS.JET,
    title: "QCLUB",
    subtitle: "UX/UI, Mobile App",
    img: "/assets/images/workSections/qclubApp.png",
    imgClass: "image3",
    color: COLORS.CHAMPAGNE_PINK,
    order: ORDER.PICTURE_DOWN,
    link: "https://lnkd.in/d2qrjvGG",
  },
  {
    description: "cryptoCrazy Beavers - NFT Collection",
    descFontColor: COLORS.JET,
    title: "OpenSea",
    subtitle: "Illustration, ",
    img: "/assets/images/workSections/cryptoCreazyBeavers.png",
    imgClass: "image4",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/17424751-cryptoCrazy-Beavers-NFT",
  },
  {
    description: "GetVoIP ■ website redesign",
    descFontColor: COLORS.JET,
    title: "GetVoIP",
    subtitle: "UX/UI, Website",
    img: "/assets/images/workSections/getvoipLandingPage.png",
    imgClass: "image5",
    color: COLORS.MAGNOLIA_DARK,
    order: ORDER.PICTURE_UP,
    link: "https://getvoip.com/",
  },
  {
    descFontColor: COLORS.JET,
    description:
      "From Scratch, a Washington DC-based food truck and catering business",
    title: "From Scratch",
    subtitle: "subtitle",
    img: "/assets/images/workSections/fromScratch.png",
    imgClass: "image6",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_DOWN,
    link: "https://www.facebook.com/ffscratch",
  },
  {
    description: "Sekopak Instagram posts",
    descFontColor: COLORS.JET,
    title: "SekoPak",
    subtitle: "Truck Warp Design, UI/UX, Web, Branding, Visuals, Illustration",
    img: "/assets/images/workSections/sekopak.png",
    imgClass: "image7",
    color: COLORS.ALICE_BLUE,
    order: ORDER.PICTURE_UP,
    link: "https://sekopak.com/",
  },
  {
    description: "Dashboard project ■ aragon/blockchain app",
    descFontColor: COLORS.JET,
    title: "aragon/blockchain app",
    subtitle: "subtitle",
    img: "/assets/images/workSections/dashboardCryptoYogy.png",
    imgClass: "image8",
    color: COLORS.MINT_CREAM,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/14907864-UI-UX-Dashboard-project",
  },
  {
    description: "CasinoGold app ■ main screens",
    descFontColor: COLORS.JET,
    title: "CasinoGold app",
    subtitle: "UX/UI, Dashboard",
    img: "/assets/images/workSections/casinoApp.png",
    imgClass: "image9",
    color: COLORS.COSMIC_LATTE,
    order: ORDER.PICTURE_DOWN,
    link: "",
  },
  {
    description: "Euclid School ■ Landing Page",
    descFontColor: COLORS.JET,
    title: "quanthub",
    subtitle: "subtitle",
    img: "/assets/images/workSections/schoolHeroPage.png",
    imgClass: "image10",
    color: COLORS.ALICE_BLUELIGHT,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/14305872-Euclid-School-Landing-Page",
  },
  {
    description: "Music Player ■ Mobile app",
    descFontColor: COLORS.JET,
    title: "Random app",
    subtitle: "subtitle",
    img: "/assets/images/workSections/musicApp.png",
    imgClass: "image11",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_UP,
    link: "https://dribbble.com/shots/14717391-Music-Player-Mobile-App",
  },
  {
    description: "Logo Collection",
    descFontColor: COLORS.JET,
    title: "Contura Design",
    subtitle: "subtitle",
    img: "/assets/images/workSections/logoCollection.png",
    imgClass: "image12",
    color: COLORS.CHAMPAGNE_PINK,
    order: ORDER.PICTURE_DOWN,
    link: "https://dribbble.com/shots/14157514-Logo-universe-1",
  },

  {
    description: "Notorious Potato ■ Social Media",
    descFontColor: COLORS.JET,
    title: "Notorious Potato",
    subtitle: "subtitle",
    img: "/assets/images/workSections/notoriousPotatoSocial.png",
    imgClass: "image13",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_DOWN,
    link: "https://www.instagram.com/notoriouspotato_gr/",
  },
  {
    description: "IT Security Website",
    descFontColor: COLORS.JET,
    title: "Avanet",
    subtitle: "subtitle",
    img: "/assets/images/workSections/avanetWebsite.png",
    imgClass: "image14",
    color: COLORS.LAVENDER,
    order: ORDER.PICTURE_UP,
    link: "https://www.behance.net/gallery/95255645/Avanet-Landing-Page",
  },
  {
    description: "Park City Granola",
    descFontColor: COLORS.JET,
    title: "Park City Granola",
    subtitle: "subtitle",
    img: "/assets/images/workSections/parkCityGranola.png",
    imgClass: "image15",
    color: COLORS.CHAMPAGNE_PINK,
    order: ORDER.PICTURE_UP,
    link: "https://www.instagram.com/parkcitygranolaco/",
  },
  {
    description: "Halloween Page 404",
    descFontColor: COLORS.JET,
    title: "Hero page",
    subtitle: "subtitle",
    img: "/assets/images/workSections/halloween404page.png",
    imgClass: "image16",
    color: COLORS.MISTY_ROSE,
    order: ORDER.PICTURE_UP,
    link: "https://www.instagram.com/p/CHBPJpLHOsH/?img_index=1",
  },
];
