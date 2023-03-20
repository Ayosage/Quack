import {Fragment} from "react";
import {Outlet} from "react-router-dom";

function Settings() {
    return (
        <Fragment>
            <h1>This is your settings</h1>
            <Outlet />
        </Fragment>
    );
}

export default Settings;