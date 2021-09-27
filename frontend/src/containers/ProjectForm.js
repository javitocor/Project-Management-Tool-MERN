/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { UpdateCall, CreateCall, AllCall } from '../helpers/apiCalls';

class ProjectForm extends React.Component{
  constructor(props) {
    super(props);
    this.state= {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { location, getStacks} = this.props;
    const { type, project  } = location.state;
    if (type === 'create') {
      this.setState({ 
        name: '',
        description: '',
        status: '',
        year: 1980,
        stack: [],
        links: {}
      })
    } else if (type === 'update') {
      this.setState(project)
    }
    try {
      await getStacks('stacks');
    } catch(error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'status') {
      this.setState({[event.target.name]: event.target.checked})
    }
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { location, createProject, updateProject } = this.props;
    const { type, project  } = location.state;
    const token = this.getCookie('csrftoken');
    try {
      if(type === 'create') {
        const data = await createProject('projects', token, this.state);
          <Redirect 
            to={{
            pathname: `/project/${data.name}`,
            state: {
              id: data._id,
            },
          }}
          />
      } else if (type === 'update') {
        const data = await updateProject('projects', token, this.state, project._id);
          <Redirect 
            to={{
            pathname: `/project/${data.name}`,
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
    const { location, stacksList} = this.props;
    const { type, project  } = location.state;
    return (
      <Container>
        <h1>
          {type === 'create' ? 'Create' : 'Update'}
          {' '}
          Project
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Project Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter project name" 
              defaultValue={this.state.name ? this.state.name : ''}
              name="name"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Project Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5}
              defaultValue={this.state.description ? this.state.description : ''}
              name="description"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Year</Form.Label>
            <Form.Control 
              type="number" 
              min="1950" 
              max="2100" 
              defaultValue={this.state.released_year ? this.state.released_year : 1980}
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Status
              </Form.Label>
              <Row sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="Production"
                  checked={this.state.status === 'Production'}
                  name="status"
                  id="status1"
                  onChange={this.handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Development"
                  checked={this.state.status === 'Development'}
                  name="status"
                  id="status2"
                  onChange={this.handleChange}
                />
                <Form.Check
                  Inline
                  type="radio"
                  label="Standby"
                  checked={this.state.status === 'Standby'}
                  name="status"
                  id="status3"
                  onChange={this.handleChange}
                />
              </Row>
            </Form.Group>
          </fieldset>
          <Form.Group as={Col} controlId="formState">
            <Form.Label>Stack</Form.Label>
            <Form.Control as="select" multiple name="stack" value={this.state.stack} onChange={this.handleChange}>
              {stacksList.map(stack => (
                <option key={stack.name} value={stack._id}>
                  {stack.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            {type === 'create' ? 'Create' : 'Update'}
          </Button>
        </Form>
      </Container>
    );
  };
};

ProjectForm.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ 
      project: PropTypes.object.isRequired, 
      type: PropTypes.string.isRequired 
    }),
  }).isRequired,  
  createProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  getStacks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  stacks: {
    error: state.stacks.error,
    stacksList: state.stacks.stacksList,
    pending: state.stacks.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createProject: CreateCall,
  updateProject: UpdateCall,
  getStacks: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);