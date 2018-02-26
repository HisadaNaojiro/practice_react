import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout';
import WholeCommentTable from './component/WholeCommentTable';

const App = () => {
  return(
    <Layout>
	   <WholeCommentTable />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("app"))
