import * as React from "react";
import {Link} from "react-router-dom";
import {SingleViewLayout} from "layout";
import {routerSwitchRoutes} from "core";
import {LoginContainer} from 'pods/login';

export const LoginPage = () => (
    <SingleViewLayout>
        <LoginContainer/>
    </SingleViewLayout>
);
