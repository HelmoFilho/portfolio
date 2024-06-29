import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

import { Disclosure } from "@headlessui/react";
import { Suspense } from "react";


const App = () => {

  return (
    <>
      <Suspense fallback="is loading...">
        <Disclosure>
          <Header />
          <Sidebar />
        </Disclosure>
        <Main />
        <Footer />
      </Suspense>
    </>
  );
}

export default App