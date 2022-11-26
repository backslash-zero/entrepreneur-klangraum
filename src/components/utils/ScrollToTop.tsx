import { useEffect } from "react";

export default function ScrollToTop() {

	useEffect(() => {
	console.log("calling scroll")
    window.scrollTo(0, 0);
  }, []);

  return null;
}