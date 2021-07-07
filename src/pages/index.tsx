import React, { useEffect } from "react";
import { navigate } from "gatsby";

export default function App() {
  useEffect(() => {
    // quick hack to redirect to oc page, since I haven't figured out what to do with the main page yet
    navigate("/oc/");
  }, []);

  return <div></div>;
}
