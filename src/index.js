import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/layout.js';

const App = () => {
  return(
    <Layout>
      test
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("app"))
