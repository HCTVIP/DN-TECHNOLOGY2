import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Technology from '../pages/Technology/Technology';
import Contact from '../pages/Contact/Contact';
import Services from '../pages/Services/Services';

const publishRoutes = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/about',
      component: About,
   },
   {
      path: '/services',
      component: Services,
   },
   {
      path: '/technology',
      component: Technology,
   },
   {
      path: '/contacts',
      component: Contact,
   },
];

const privateRoutes = {};

export { publishRoutes, privateRoutes };
