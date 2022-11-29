import { useCallback } from "react";
import type { Location, useMatches } from "react-router-dom";
import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  const navigation = useNavigation();

  const getKey = useCallback(
    (location: Location, matches: ReturnType<typeof useMatches>) => {
      let match = matches.find((m) => (m.handle as any)?.scrollMode);
      if ((match?.handle as any)?.scrollMode === "pathname") {
        return location.pathname;
      }

      return location.key;
    },
    []
  );

  return (
    <>
      <div
        className={`${
          navigation.state === "idle" ? "hidden" : "block"
        } fixed top-0 right-0 p-1`}
      >
        Navigating...
      </div>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={getKey} />
    </>
  );
};

export default Layout;
