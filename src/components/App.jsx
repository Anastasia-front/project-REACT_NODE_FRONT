import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Layout from './Layout/Layout';

import AuthPage from '../pages/AuthPage/AuthPage';
import LinkToAuth from './LinktoAuth';
import ScreensPage from './ScreensPage/ScreensPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/welcome" />} />
        <Route
          path="/welcome"
          element={
            <div>
              welcome page <LinkToAuth />
            </div>
          }
        />
        <Route path="/auth" element={<LinkToAuth />} />

        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/auth" component={<div>home</div>} />
          }
        />

        <Route path="/home/:boardName" element={<div>Screens page</div>} />
      </Route>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route
        path="/welcome"
        element={
          <div>
            welcome page <LinkToAuth />
          </div>
        }
      />
      <Route path="/auth" element={<Navigate to="/auth/register" />} />

      <Route path="/auth/:id" element={<AuthPage />} />
      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/auth" component={<div>home</div>} />
        }
      />
      <Route path="/home/:boardName" element={<ScreensPage />} />
    </Routes>
  );
};

export default App;
