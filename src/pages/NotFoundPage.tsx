import React from "react";
import { useRouteError } from "react-router-dom";

type Error = { status: number; statusText: string; data: null };

const NotFoundPage = () => {
  const error: Error | any = useRouteError();
  console.error(error);

  return (
    <div className="bg-black text-white min-h-screen grid place-items-center">
      <h1 className="text-3xl md:text-4xl font-semibold">
        {error.status} | {error.statusText}
      </h1>
    </div>
  );
};

export default NotFoundPage;
