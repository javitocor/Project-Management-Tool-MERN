/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import { UpdateCall, CreateCall } from '../helpers/apiCalls';

class StackForm extends React.Component{
  constructor(props) {
    super(props);
    this.state= {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { location} = this.props;
    const { type, stack  } = location.state;
    if (type === 'create') {
      this.setState({ 
        name: '',
        description: '',
        link: '',
        released_year: 1950,
      })
    } else if (type === 'update') {
      this.setState(stack)
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { location, createStack, updateStack } = this.props;
    const { type, stack  } = location.state;
    const token = this.getCookie('csrftoken');
    try {
      if(type === 'create') {
        const data = await createStack('stacks', token, this.state);
          <Redirect 
            to={{
            pathname: `/stack/${data.name}`,
            state: {
              id: data._id,
            },
          }}
          />
      } else if (type === 'update') {
        const data = await updateStack('stacks', token, this.state, stack._id);
          <Redirect 
            to={{
            pathname: `/stack/${data.name}`,
            state: {
              id: data._id,
            },
          }}
          />
      }
    } catch (error) {
      console.log(error)
    }
  }  

  getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (`${name  }=`)) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  render() {
    const { location} = this.props;
    const { type, stack  } = location.state;
    return (
      <Container>
        <h1>
          {type === 'create' ? 'Create' : 'Update'}
          {' '}
          Stack
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Stack Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter stack name" 
              defaultValue={this.state.name ? this.state.name : ''}
              name="name"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Stack Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5}
              defaultValue={this.state.description ? this.state.description : ''}
              name="description"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Stack Released Year (1950-2100</Form.Label>
            <Form.Control 
              type="number" 
              min="1950" 
              max="2100" 
              defaultValue={this.state.released_year ? this.state.released_year : 1950}
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Link to official website</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter stack link"
              defaultValue={this.state.link ? this.state.link : ''}
              name="link"
              onChange={this.handleChange}             
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {type === 'create' ? 'Create' : 'Update'}
          </Button>
        </Form>
      </Container>
    );
  };
};

StackForm.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ 
      stack: PropTypes.object.isRequired, 
      type: PropTypes.string.isRequired 
    }),
  }).isRequired,  
  createStack: PropTypes.func.isRequired,
  updateStack: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createStack: CreateCall,
  updateStack: UpdateCall,
}, dispatch);

export default connect(null, mapDispatchToProps)(StackForm);