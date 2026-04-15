import React from "react";
import Achieve from "../achieve";
import AuthorV2 from "../authorv2";
import Contact from "../contact";
import Footer from "../global/footer";
import Header from "../global/header";
import Hero from "../hero";
import Gallery from "../gallery";


const Version01 = ({header, footer}) => {
  const {menu} = footer;

  return (
    <>
     <Header header={header} />
      <Hero isBg="yes" />
      <AuthorV2 isBg="" />
      <Gallery isBg="" />
      <Achieve isBg="" />
      <Contact isBg="" />
      <Footer  isBg="yes" menu={menu} />
    </>
  );
}

export default Version01;
