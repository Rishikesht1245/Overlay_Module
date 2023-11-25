import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
