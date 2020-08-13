import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Meet Rahul Raj</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
