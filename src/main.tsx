import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './views/App/index';

import './views/styles/reset.scss';
import './views/styles/common.scss';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}