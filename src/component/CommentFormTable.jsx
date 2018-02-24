import React from 'react';
import {FormGroup,FormControl,ControlLabel,HelpBlock,Button} from 'react-bootstrap';

const NameForm = (props) => {
  return(
    <FormGroup validationState={(() => {return __checkValidationNameStatus(props.name)})()}>
      <ControlLabel>Name</ControlLabel>
      <FormControl
	type="text"
        name="name"
	placeholder="please Enter Name"
	value={props.name}
	onChange={props.onChange}
      />
      <HelpBlock>{props.message}</HelpBlock>
      <HelpBlock>{(props.name.length > 0)? props.name.length: ''}</HelpBlock>
      <FormControl.Feedback />
    </FormGroup>
  )
};

const CommentForm = (props)=>{
  return(
    <FormGroup validationState={(() => {return __checkValidationCommentStatus(props.comment)})()}>
      <ControlLabel>Comment</ControlLabel>
      <FormControl
        componentClass="textarea"
        placeholder="please Enter Comment"
        name="comment"
        value={props.comment}
        onChange={props.onChange}
      />
      <HelpBlock>{props.message}</HelpBlock>
      <HelpBlock>{(props.comment.length > 0)? props.comment.length: ''}</HelpBlock>
      <FormControl.Feedback />
    </FormGroup>
  )
};

const ButtonForm = (props) => {
  return(
    <Button bsStyle="primary" block disabled={(!props.name || !props.comment)? true : false} onClick={props.onClick} >Submit</Button>
  )
};

function __checkValidationNameStatus(val){
  const length = val.length;
  if(length == 0) return null;
  else if(length < 5 || length > 20) return 'error';
  else  return 'success';
}

function __checkValidationCommentStatus(val){
  const length = val.length;
  if(length == 0) return null;
  else if( length < 10 || length > 30) return 'error';
  else return 'success';
}

const CommentFormTable = (props) => {
  let name = {
    name: props.data.name,
    message: props.message.name,
    onChange: props.onChange
  };
  let comment = {
    comment: props.data.comment,
    message: props.message.comment,
    onChange: props.onChange
  };
  let button = {
    name: props.status.name,
    comment: props.status.comment,
    onClick: props.onClick
  }
  return(
    <form>
      <NameForm {...name} />
      <CommentForm {...comment} />
      <ButtonForm {...button}/>
    </form>
  )
}

export default CommentFormTable;
