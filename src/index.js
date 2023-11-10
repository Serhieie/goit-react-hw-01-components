import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { colors } from './constants';

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);
// Some test comment
rootContainer.render(
  <ThemeProvider theme={{ colors }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
