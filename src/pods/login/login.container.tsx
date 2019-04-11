import * as React from "react";
import { LoginComponent } from "./login.component";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { routesLinks, SessionContext } from "core";
import * as H from "history";

import {
    createEmptyLogin,
    LoginEntityVm,
    createDefaultLoginFormErrors
} from "./login.vm";
import { validateCredentials } from "./login.api";
import { NotificationComponent } from "common/components";
import { loginFormValidation } from "./login.validation";
import {
    FieldValidationResult,
    FormValidationResult
} from "lc-form-validation";

interface Props extends RouteComponentProps {}

const LoginContainerInner = (props: Props) => {
    const [credentials, setCredentials] = React.useState(createEmptyLogin());
    const [showLoginFailedMsg, setShowLoginFieldMsg] = React.useState(false);
    const [loginFormErrors, setLoginFormErrors] = React.useState(
        createDefaultLoginFormErrors
    );
    const loginContext = React.useContext(SessionContext);
    const { history } = props;

    const doLogin = () => {
        loginFormValidation.validateForm(credentials).then(formValidationResult => {
            if (formValidationResult.succeeded) {
                authenticate();
            } else {
                showFullFormErrors(formValidationResult);
            }
        });
    };

    const authenticate = () => {
        const { login, password } = credentials;
        validateCredentials(login, password).then(areValidCredentials =>
            processValidationResult(areValidCredentials)
        );
    };

    const processValidationResult = (areValidCredentials: boolean) =>
        areValidCredentials
            ? navigateToHotelPage()
            : setShowLoginFieldMsg(true);

    const navigateToHotelPage = () => {
        loginContext.updateLogin(credentials.login);
        history.push(routesLinks.hotelCollection);
    }

    const showFullFormErrors = (formValidationResult: FormValidationResult) => {
        alert("error, review the fields");
        const updatedLoginFormErrors = {
            ...loginFormErrors,
            ...formValidationResult.fieldErrors
        };
        setLoginFormErrors(updatedLoginFormErrors);
    };

    const onUpdateCredentialsField = (name: string, value) => {
        setCredentials({
            ...credentials,
            [name]: value
        });

        loginFormValidation
            .validateField(credentials, name, value)
            .then(fieldValidationResult => {
                setLoginFormErrors({
                    ...loginFormErrors,
                    [name]: fieldValidationResult
                });
            });
    };

    return (
        <>
            <LoginComponent
                onLogin={doLogin}
                credentials={credentials}
                onUpdateCredentials={onUpdateCredentialsField}
                loginFormErrors={loginFormErrors}
            />
            <NotificationComponent
                message="Invalid login or password, shhh admin / test"
                show={showLoginFailedMsg}
                onClose={() => setShowLoginFieldMsg(false)}
            />
        </>
    );
};

export const LoginContainer = withRouter<Props>(LoginContainerInner);
