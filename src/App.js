import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Team from './views/Team';
import Alumni from './views/Alumni';
import Events from './views/Events';
import Arhn from './views/Arhn';
import Ted from './views/Ted';




// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/team" component={Team} layout={LayoutDefault} />
          <AppRoute exact path="/events" component={Events} layout={LayoutDefault} />
          <AppRoute exact path="/ted" component={Ted} layout={LayoutDefault} />
          <AppRoute exact path="/arhn" component={Arhn} layout={LayoutDefault} />
          {/* <AppRoute exact path="/alumni" component={HallofFame} layout={LayoutDefault} /> */}
          <AppRoute exact path="/alumni" component={Alumni} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;
