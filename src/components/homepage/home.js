import React from 'react';
import Header1 from './header/header';
import Category from './category/category';
import Collection from './collection/collection';
import Localities from './localities/localities';
import ZomatoApp from './app/app';
import CollapsePanel from './explore/explore';
import Footer from '../common/footer/footer';

export default function Home() {
  return (
    <>
      <Header1 />
      <Category />
      <Collection />
      <Localities />
      <ZomatoApp />
      <CollapsePanel />
      <Footer />
    </>


  )
}























//type of components
//component lifecycle
//routers
// diffrence between jsx and js
//render HTML?
//js comonents in React