/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/sort-comp */
/* eslint-disable prefer-const */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Container, Form, Col, Row } from 'react-bootstrap';
import { UpdateCall, CreateCall, AllCall, DeleteCall } from '../helpers/apiCalls';
import style from '../style/ProjectForm.module.css';

class ProjectForm extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
        name: '',
        description: '',
        status: '',
        year: 1980,
        links: {},
        stack: [],
        image: '',
        github: '',
        liveLink: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { location, getStacks} = this.props;
    const { type, project  } = location.state;    
    try {
     await getStacks('stacks');
     if (type === 'update') {
      this.setState(project)
    }
    } catch(error) {
      console.log(error)
    }
  }

  handleSelect = (event) => {
    if (event.target.name === 'stack') {
      const selected=[];
      let selectedOption=(event.target.selectedOptions);
  
      for (let i = 0; i < selectedOption.length; i++){
          selected.push(selectedOption.item(i).value)
      }
    
      this.setState({stack: selected});
    }
  }

  handleChange = (event) => {
    if (event.target.name === 'status') {
      this.setState({[event.target.name]: event.target.value})
    } else {
      this.setState({[event.target.name]: event.target.value})
    }      
  }

  onFileChange = (e) => {
    this.setState({ image: e.target.files[0] })
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { location, createProject, updateProject } = this.props;
    const { type, project  } = location.state;
    const token = this.getCookie('csrftoken');
    try {
      if(type === 'create') {
        const formData = new FormData();
        for (const key in this.state){
          if(key === 'stack'){
            formData.append(key, this.state[key])
          }
          formData.append(key, this.state[key])
        }
        const data = await createProject('projects', token, formData);
        this.props.history.push({
          pathname:`/project/${data.project.name}`,
          state: {
            id: data.project._id,
          },
        });
      } else if (type === 'update') {
        const formData = new FormData();
        let newStack = this.state.stack.some(obj => obj.name ) ? this.state.stack.map(stack=>stack._id) : this.state.stack
        await this.setState({stack: newStack})        
        for (const key in this.state){
          if(key === 'stack'){
            this.state.stack.forEach(item=> formData.append('stack[]', item))
          }
          formData.append(key, this.state[key])
        }
        const data = await updateProject('projects', token, formData, project._id);
        this.props.history.push({
          pathname:`/project/${data.project.name}`,
          state: {
            id: data.project._id,
          },
        });
      }
    } catch (error) {
      console.log(error)
    }
  }  

  async handleDelete (e) {
    const { location, deleteProject } = this.props;
    const { project } = location.state;
    const token = this.getCookie('csrftoken');
    try {
      await deleteProject('projects', token, project._id)
      this.props.history.push('/projects');
    } catch(error) {
      console.log(error)
    }
  }

  getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (`${name  }=`)) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  
  render() {
    const { location, stacks} = this.props;
    const {stacksList} = stacks;
    const { type, project } = location.state;
    return (
      <Container className={style.container2}>
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
              defaultValue={this.state.name}
              name="name"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Project Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5}
              defaultValue={this.state.description}
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
              value={this.state.year}
              name="year"
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
                  value='Production'
                  checked={this.state.status === 'Production'}
                  name="status"
                  id="status1"
                  onChange={this.handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Development"
                  value='Development'
                  checked={this.state.status === 'Development'}
                  name="status"
                  id="status1"
                  onChange={this.handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Standby"
                  value='Standby'
                  checked={this.state.status === 'Standby'}
                  name="status"
                  id="status1"
                  onChange={this.handleChange}
                />
              </Row>
            </Form.Group>
          </fieldset>
          <Form.Group controlId="formState">
            <Form.Label>Stack</Form.Label>
            <Form.Control as="select" multiple className={style.select} name="stack" value={this.state.stack.some(obj => obj.name ) ? this.state.stack.map(stack=>stack._id) : this.state.stack} onChange={this.handleSelect}>
              {stacksList && stacksList.map(stack => (
                <option key={stack.name} value={stack._id}>
                  {stack.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Github</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter project name" 
              defaultValue={this.state.links.Github ? this.state.links.Github : this.state.github}
              name="github"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Live Link</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter project name" 
              defaultValue={this.state.links['Live Link'] ? this.state.links['Live Link'] : this.state.liveLink}
              name="liveLink"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <div className="form-group">
            <input type="file" onChange={this.onFileChange} name='avatar' />
          </div>
          <Button variant="outline-secondary" type="submit" className="mt-3 mr-3">
            {type === 'create' ? 'Create' : 'Update'}
          </Button>
          {type === 'update' ? (
            <Button
              variant="outline-secondary"
              type="submit"
              className={`${style.btn2} mr-3 mt-3`}
              onClick={e =>
                window.confirm("Are you sure you want to delete this project?") &&
                this.handleDelete()
            }
            >
              Delete
            </Button>
            )
            : (<></>)}
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
  stacks: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    stacksList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  createProject: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
  getStacks: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
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
  deleteProject: DeleteCall
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);