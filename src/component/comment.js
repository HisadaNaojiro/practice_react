import React from 'react';
import {Panel} from 'react-bootstrap';

const CommentField = (props) => {
  return(
    <Panel>
      <Panel.Heading>{props.name}</Panel.Heading>
      <Panel.Body>{props.comment}</Panel.Body>
    </Panel>
  );
}

const Comment =(proos) =>{ 
  return(
    <div>
      <h2 className="page-header">Show Commtens</h2>
      {this.state.items.map((data,number) => {
        return <CommentField key={number} {...data} />
      })}
    </div>
  );
}

export default Comment;
