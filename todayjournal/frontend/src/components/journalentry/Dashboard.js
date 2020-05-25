import React, { Fragment } from "react";
import Form from "./Form";
import Entries from "./Entries";

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Entries />
        </Fragment>
    );
}