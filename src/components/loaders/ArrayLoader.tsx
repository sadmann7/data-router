import React from "react";

type ArrayLoaderData = {
  arr: Array<number>;
};

const ArrayLoader = async (): Promise<ArrayLoaderData> => {
  await new Promise((r) => setTimeout(r, 1000));
  return {
    arr: new Array(100).fill(null).map((_, i) => i),
  };
};

export default ArrayLoader;
