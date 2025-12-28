
// import { BrowserRouter } from 'react-router-dom';
// import { Routes, Route } from 'react-router';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



import ProtectedRouter from '../src/components/protectedRouter/ProtectedRouter';
import './App.css';
import { routes } from './services/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate ? (
                  <ProtectedRouter>
                    {route.element}
                  </ProtectedRouter>
                ) : (
                  route.element
                )
              }
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App
