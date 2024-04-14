import { useEffect } from "react";
import { LazyQueryTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export const useRequestTriggerWithAbort = (
  trigger: LazyQueryTrigger<any>,
  params?: { [key: string]: string | number },
) => {
  useEffect(() => {
    const request = trigger(params, true);
    return () => request.abort();
  }, []);
};
