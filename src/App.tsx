import React from 'react';

import Signin from './pages/Signin';
// import Signup from './pages/Signup';
import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Ailton Oliveira' }}>
      <Signin />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
