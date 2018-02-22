import React from 'react';
import {Grid,Col,Row} from 'react-bootstrap';
import InputForm from './component/inputForm';
import Comment from './component/comment';


export default class WholeCommnetField extends React.Component{
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

  handleChange(item){
    const items = [...this.state.items];
    items.push(item);
    this.setState({items: items});
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
            <InputForm />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <Comment /> 
          </Col>
        </Row>
      </Grid>
    );
  }
}
