import React, {useCallback, useState} from 'react';
import '@shopify/polaris/styles.css';
import {Frame, TopBar, Navigation} from '@shopify/polaris';
import Home from './components/Home';
import Orders from './components/Orders';
import Products from './components/Products'

function App() {
  const [menuState, setMenuState] = useState('home');
  const setPageMarkup = useCallback(
    (value) => setMenuState(value),
    [],
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      initials='🦄'
      name='Dev Degree'
      detail="2020 Cohort"
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      placeholder="Search"
      onChange={()=>{}}
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        separator
        items={[
          {
            label: 'Home',
            onClick: () => setPageMarkup('home'),
          },
          {
            label: 'Orders',
            onClick: () => setPageMarkup('orders'),
          },
          {
            label: 'Products',
            onClick: () => setPageMarkup('products'),
          },
        ]}
      />
    </Navigation>
  );

  const getCurrentMarkup = () => {
    switch(menuState){
      case 'orders':
        return (<Orders />);
      case 'products':
          return (<Products />);
      default:
        return (<Home />)
    }
  }

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
    >
      {getCurrentMarkup()}
    </Frame>
  );
}

export default App;
