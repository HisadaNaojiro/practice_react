import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/layout.js';
import InputForm from './component/inputForm';

const App = () => {
  return(
    <Layout>
      <InputForm />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("app"))
