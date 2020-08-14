import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

const Page1 = lazy(() => import("./pages/page-1/Page-1"));

const CustomRouter = () => (
    <Suspense fallback={<div>loading ...</div>}>
        <Route path="/" exact component={() => <h1>Home Page</h1>} />
        <Route path="/page-1" component={Page1} />
    </Suspense>
);

CustomRouter.defaultName = "CustomRouter";

export default CustomRouter;