import {Fragment} from "react";
import {Outlet} from "react-router-dom";

function Explore() {
    return (
        <Fragment>
            <h1>This is your exploration page</h1>
            <Outlet />
        </Fragment>
    );
}

export default Explore;