import { COLORS, ORDER } from "../../../utils/globalConstans";

export interface Work {
    description: string;
    title: string;
    img: string;
    color: string;
    order: string;
}

export const WORK_LIST:Work[]=[
    {
        description: 'Billboard Animal Welfare PSA',
        title: 'Animal Welfare PSA',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.PALE_LEMON,
        order: ORDER.PICTURE_DOWN
    },
    {
        description: 'Transport planning and management platform',
        title: 'rouvia (previously, Forwardize)',
        img: '/assets/images/work/imageBilbordPrva.png',
        color: COLORS.MISTY_ROSE,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'QClub application',
        title: 'QCLUB',
        img: '/assets/images/work/imageBilbordPrva.png',
        color: COLORS.CHAMPAGNE_PINK,
        order: ORDER.PICTURE_DOWN
    },
    {
        description: 'cryptoCrazy Beavers - NFT Collection',
        title: 'OpenSea',
        img: '/assets/images/work/imageBilbordPrva.png',
        color: COLORS.MISTY_ROSE,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'GetVoIP ■ website redesign',
        title: 'GetVoIP',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.MAGNOLIA_DARK,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'From Scratch, a Washington DC-based food truck and catering business',
        title: 'From Scratch',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.MISTY_ROSE,
        order: ORDER.PICTURE_DOWN
    },
    {
        description: 'Sekopak Instagram posts',
        title: 'SekoPak',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.ALICE_BLUE,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'Dashboard project ■ aragon/blockchain app',
        title: 'aragon/blockchain app',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.MINT_CREAM,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'CasinoGold app ■ main screens',
        title: 'CasinoGold app',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.COSMIC_LATTE,
        order: ORDER.PICTURE_DOWN
    },
    {
        description: 'Euclid School ■ Landing Page',
        title: 'quanthub',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.ALICE_BLUELIGHT,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'Music Player ■ Mobile app',
        title: 'Random app',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.MISTY_ROSE,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'Notorious Potato ■ Social Media',
        title: 'Notorious Potato',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.MISTY_ROSE,
        order: ORDER.PICTURE_DOWN
    },
]