import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';

const publishRoutes = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/services',
      component: Services,
   },
   {
      path: '/contacts',
      component: Contact,
   },
];

const privateRoutes = {};

export { publishRoutes, privateRoutes };
