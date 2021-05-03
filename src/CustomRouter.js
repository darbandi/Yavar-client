import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import Loading from "./components/loading/Loading";

const SplashScreen = lazy(() => import("./pages/splash-screen/SplashScreen"));
const Surah = lazy(() => import("./pages/surah/Surah"));
const SurahDetails = lazy(() => import("./pages/surah-details/SurahDetails"));
const Verses = lazy(() => import("./pages/verses/Verses"));
const SurahNewWords = lazy(() =>
  import("./pages/surah-new-words/SurahNewWords")
);

const CustomRouter = () => (
  <Suspense fallback={<Loading></Loading>}>
    <Route path="/" exact component={SplashScreen} />
    <Route path="/splash-screen" component={SplashScreen} />
    <Route path="/surah" component={Surah} />
    <Route path="/surah-details/:id" component={SurahDetails} />
    <Route path="/verses/:id" component={Verses} />
    <Route path="/surah-new-words/:id" component={SurahNewWords} />
  </Suspense>
);

CustomRouter.defaultName = "CustomRouter";

export default CustomRouter;
