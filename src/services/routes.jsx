import Home from '../pages/home/home';
import Login from '../pages/login/Login';
import Environment from '../pages/enviroment/Environment';
import ExportCsv from '../pages/exportCsv/ExportCsv';
import Registros from '../pages/registros/Registros';
import SignupForm from '../pages/signUpForm/SignUpForm';

export const routes = [
  {
    path: '/',
    element: <Login />,
    isPrivate: false,
  },
  {
    path: '/signup',
    element: <SignupForm />,
    isPrivate: false,
  },
  {
    path: '/home',
    element: <Home />,
    isPrivate: true,
  },
  {
    path: '/environment',
    element: <Environment />,
    isPrivate: true,
  }, {
    path: '/certificado',
    element: <Home />,
    isPrivate: true,
  },{
    path: '/export',
    element: <ExportCsv />,
    isPrivate: true,
  },
  {
    path: '/registros',
    element: <Registros />,
    isPrivate: true,
  }
];
