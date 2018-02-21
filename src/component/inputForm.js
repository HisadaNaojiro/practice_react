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
    <Button bsStyle="primary" block disabled={(!props.name || !props.comment)? true : false}>Submit</Button>
  )
};

function __checkValue(type,length){
  let status = false;
  let message = '';
  switch(type){
    case 'name':
      if(length == 0 ){ break;}

      if(length < 5 || length > 20){
	message =  'Please enter at least 5 characters and 20 characters or less';
      }else if (length >= 5 && length <= 20){
        message = 'OK!';
        status = true;
      }
      break;
    case 'comment':
      if(length == 0 ){ break;}

      if(length < 10 || length > 30){
	message =  'Please enter at least 10 characters and 30 characters or less';
      }else if (length >= 10 && length <= 30){
        message = 'OK!';
        status = true;
      }
      break;
  }
  return {status : status , message: message}
}

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

export default class InputForm extends React.Component{
  constructor(){
    super();
    this.state={
      data: {
        name: '',
        comment: ''
      },
      message: {
        name: '',
        comment: ''
      },
      status:{
        name: false,
        comment: false 
      }
    };
    this.handleCheckValue = this.handleCheckValue.bind(this);
  }

  handleCheckValue(e){
    const type = e.target.name;
    const val = e.target.value; 
    const result = __checkValue(type,val.length);
    let data = Object.assign({},this.state.data);
    let message = Object.assign({},this.state.message);
    let status = Object.assign({},this.state.status);

    switch(type){
      case 'name':
        data.name = val;
        message.name = result.message;
        status.name = result.status;
        break;
      case 'comment':
        data.comment= val;
        message.comment= result.message;
        status.comment= result.status;
        break;
    } 
    this.setState({
      data: data,
      message: message,
      status: status
    });
  }

  render(){
    let name = {
      name: this.state.data.name,
      message: this.state.message.name,
      onChange: this.handleCheckValue
    };
    let comment = {
      comment: this.state.data.comment,
      message: this.state.message.comment,
      onChange: this.handleCheckValue
    };
    let button = {
      name: this.state.status.name,
      comment: this.state.status.comment,
    }
    return(
      <form>
        <NameForm {...name} />
        <CommentForm {...comment} />
        <ButtonForm {...button}/>
      </form> 
    ) 
  } 
}
