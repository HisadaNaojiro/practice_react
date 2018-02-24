import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import CommentFormTable from './CommentFormTable';
import CommentTable from './CommentTable';


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

function __resetFormData(){
  return{
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
  }
}

export default class WholeCommentTable extends React.Component{
  constructor(){
    super();
    this.state = {
      items: [{name: 'sample' , comment: 'sample'}],
      form:{
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
      }
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleCheckValue = this.handleCheckValue.bind(this);
  }

  handleChange(){
    const item = {name: this.state.form.data.name ,comment: this.state.form.data.comment };
    let items = [...this.state.items];
    items.push(item);
    this.setState({items: items,form: __resetFormData()});
  }

  handleCheckValue(e){
    const type = e.target.name;
    const val = e.target.value;
    const result = __checkValue(type,val.length);
    let formData = Object.assign({},this.state.form);

    switch(type){
      case 'name':
        formData.data.name = val;
        formData.message.name = result.message;
        formData.status.name = result.status;
        break;
      case 'comment':
        formData.data.comment= val;
        formData.message.comment= result.message;
        formData.status.comment= result.status;
        break;
    }

    this.setState({
      form: formData
    });
  }

  render(){
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <CommentFormTable {...this.state.form} onChange={this.handleCheckValue} onClick={this.handleChange}/>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <CommentTable items={this.state.items} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
