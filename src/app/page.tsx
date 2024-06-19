"use client";
import { Suspense } from "react";
import Main from "@/components/Home/main";
import LoadingSpinner from "@/components/common/Loading/index";
import ErrorBoundary from "@/components/common/error";
const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
