import {generatePath} from 'react-router';

interface BaseRoutes {
    login:string;
    hotelCollection:string;
    hotelEdit:string;
}

const appBaseRoutes : BaseRoutes = {
    login:'/',
    hotelCollection:'/hotel-collection',
    hotelEdit:'/hotel-edit',
}

type RouterSwitchRoutes = BaseRoutes;

export const routerSwitchRoutes : RouterSwitchRoutes = {
    ...appBaseRoutes,
    hotelEdit:`$(appBaseRoutes.hotelEdit)/:id`,
}

// https://stackoverflow.com/questions/48215950/exclude-property-from-type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type RouterLinks = Omit<BaseRoutes,'hotelEdit'> & {hotelEdit: (id) => string};

export const routesLinks : RouterLinks = {
    ...appBaseRoutes,
    hotelEdit: (id) => generatePath(routerSwitchRoutes.hotelEdit,(id)),
}