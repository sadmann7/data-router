import React from "react";

// components import
import SEO from "@/components/SEO";
import SigninLayout from "@/components/sign/SigninLayout";

const SignInPage = () => {
  return (
    <>
      <SEO
        title="Data Router"
        description="Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime."
        name="Data Router"
        type="section"
      />
      <SigninLayout />
    </>
  );
};

export default SignInPage;
