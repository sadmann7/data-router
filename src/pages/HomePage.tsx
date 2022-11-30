import { useEffect } from "react";

// components import
import SEO from "@/components/SEO";

const HomePage = () => {
  useEffect(() => {
    const docWidth = document.documentElement.offsetWidth;
    [].forEach.call(
      document.querySelectorAll("*"),
      function (element: HTMLElement) {
        if (element.offsetWidth > docWidth) {
          console.log(element);
        }
      }
    );
  }, []);

  return (
    <div className="py-20 min-h-screen bg-black text-white">
      <SEO
        title="Data Router"
        description="Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime."
        name="Data Router"
        type="section"
      />
      <div className="w-[89vw] max-w-screen-2xl mx-auto">HomePage</div>
    </div>
  );
};

export default HomePage;
