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
        description: 'test jedan',
        title: 'test 1',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.GREEN,
        order: ORDER.PICTURE_DOWN
    },
    {
        description: 'test jedan',
        title: 'test 1',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.GREEN,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'test jedan',
        title: 'test 1',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.BLUE,
        order: ORDER.PICTURE_DOWN
    },
    {
        description: 'test jedan',
        title: 'test 1',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.RED,
        order: ORDER.PICTURE_UP
    },
    {
        description: 'test jedan',
        title: 'test 1',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.GREEN,
        order: ORDER.PICTURE_DOWN
    },
    {
        description: 'test jedan',
        title: 'test 1',
        img: '/assets/images/work/profesorImageDeseta.png',
        color: COLORS.RED,
        order: ORDER.PICTURE_UP
    },
]