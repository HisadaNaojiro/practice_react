import React from 'react';
import {Panel} from 'react-bootstrap';

const CommentRow = (props) => {
  return(
    <Panel>
      <Panel.Heading>{props.name}</Panel.Heading>
      <Panel.Body>{props.comment}</Panel.Body>
    </Panel>
  );
}

const CommentTable =(props) =>{
  return(
    <div>
      <h2 className="page-header">Show Commtens</h2>
      {props.items.map((data,number) => {
        return <CommentRow key={number} {...data} />
      })}
    </div>
  );
}

export default CommentTable;
