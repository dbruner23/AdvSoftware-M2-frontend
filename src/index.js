import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <script type="text/javascript"
      id="bcs_js_snippet"
      src="https://ui.customsearch.ai/api/ux/rendering-js?customConfig=1b066c85-85dd-4d53-83b6-25966db0f6e9&market=en-US&version=latest&q=">
    </script>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
