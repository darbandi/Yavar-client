import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

const Page1 = lazy(() => import("./pages/page-1/Page-1"));
const SplashScreen = lazy(() => import("./pages/splash-screen/SplashScreen"));
const Surah = lazy(() => import("./pages/surah/Surah"));
const SurahDetails = lazy(() => import("./pages/surah-details/SurahDetails"));
const Verses = lazy(() => import("./pages/verses/Verses"));

const CustomRouter = () => (
    <Suspense fallback={<div>loading ...</div>}>
        <Route path="/" exact component={() => <h1>Home Page</h1>} />
        <Route path="/splash-screen" component={SplashScreen} />
        <Route path="/surah" component={Surah} />
        <Route path="/surah-details/:id" component={SurahDetails} />
        <Route path="/verses/:id" component={Verses} />
    </Suspense>
);

CustomRouter.defaultName = "CustomRouter";

export default CustomRouter;