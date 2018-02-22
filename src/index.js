import React from 'react';
import ReactDOM from 'react-dom';
import {Grid,Col,Row} from 'react-bootstrap';
import Layout from './component/layout.js';
import WholeCommentField from './component/wholeCommentField';

const App = () => {
  return(
    <Layout>
      <WholeCommentField />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("app"))
