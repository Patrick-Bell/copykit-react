import { Route, Routes } from 'react-router-dom';
import HomePage from '../Home/HomePage'
import Document from '../Documentation/Document';
import TextButtonPage from '../Documentation/TextButtonPage';
import InstallPage from '../Documentation/InstallPage';
import IconButtonPage from '../Documentation/IconButtonPage'
import IconTextButtonPage from '../Documentation/IconTextButtonPage';
import StylingPage from '../Documentation/StylingPage';
import Examples from '../Documentation/Examples';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/copy.png'
import { useEffect } from 'react';
import TestPage from '../Documentation/Test';
import Version from '../Documentation/Version';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const routeInfo = (path) => {
      switch (path) {
        case '/':
          return { title: 'CopyKit - Home' };
        case '/styling':
          return { title: 'CopyKit - Styling & Props' };
        case '/examples':
          return { title: 'CopyKit - Examples' };
        case '/installation':
          return { title: 'CopyKit - Installation' };
        default:
          return { title: 'CopyKit - API' };
      }
    };

    const { title } = routeInfo(location.pathname);
    document.title = title;  // Update the document title

    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = Logo;
    document.head.appendChild(link);
    
  }, [location.pathname]);  // Trigger when the route changes


  return (
    <>
     
      <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documentation" element={<Document />} />
        <Route path="/text-button" element={<TextButtonPage />} />
        <Route path="/icon-button" element={<IconButtonPage />} />
        <Route path="/icon-text-button" element={<IconTextButtonPage />} />
        <Route path="/installation" element={<InstallPage />} />
        <Route path="/styling" element={<StylingPage />} />
        <Route path="/examples" element={<Examples />} />
        <Route path='/test' element={<TestPage />}></Route>
        <Route path='*' element={<HomePage />}></Route>
      </Routes>
      </>
    </>
  );
}

export default AppContent;
