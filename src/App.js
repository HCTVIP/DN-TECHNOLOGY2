import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes } from './routes/routes';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';

const App = () => {
   return (
      <Router>
         <div className="App">
            <Routes>
               {publishRoutes.map((route, index) => {
                  const Layout = route.Layout || DefaultLayout;
                  const Page = route.component;
                  return (
                     <Route
                        key={`route-${index}`}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     ></Route>
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
};

export default App;
