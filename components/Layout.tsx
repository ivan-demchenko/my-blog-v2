import React from 'react';
import Meta from '../components/Meta';
import Footer from '../components/Footer';

type LayoutProps = {
  pageTitle: string;
  pageKeywords: string;
  pageDescription: string;
  header: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  pageKeywords,
  pageDescription,
  header,
}) => {
  return (
    <>
      <Meta
        pageTitle={pageTitle}
        pageKeywords={pageKeywords}
        pageDescription={pageDescription}
      />
      {header}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
