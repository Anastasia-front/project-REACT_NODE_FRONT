import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthForm from './AuthForm';
import LinkToAuth from './LinktoAuth';
import Layout from './Layout/Layout';

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
        <Route path="/auth/:id" element={<AuthForm />} />

        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/auth" component={<div>home</div>} />
          }
        />

        <Route path="/home/:boardName" element={<div>Screens page</div>} />
      </Route>
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
