/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { UpdateCall } from '../helpers/apiCalls';

class StackForm extends React.Component{
  constructor(props) {
    super(props);
    this.state= {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    if (event.target.name === 'gender') {
      this.setState({[event.target.name]: event.target.checked})
    }
    this.setState({[event.target.name]: event.target.value})
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { location, updateProfile } = this.props;
    const { user  } = location.state;
    const token = this.getCookie('csrftoken');
    try {
      const data = await updateProfile('profile', token, this.state, user._id);
        <Redirect 
          to='/profile'
        />
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
    const { user  } = location.state;
    return (
      <Container>
        <h1>Edit Profile</h1>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control 
                type="text" 
                placeholder="Enter firstname" 
                value={this.state.name ? this.state.name : ''}
                name="firstname"
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Control 
                type="text" 
                placeholder="Enter lasttname" 
                value={this.state.name ? this.state.name : ''}
                name="lastname"
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Stack Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5}
              value={this.state.about ? this.state.about : ''}
              name="about"
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              value={this.state.email ? this.state.email : ''}
              name="email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
                  label="Male"
                  checked={this.state.gender === 'Male'}
                  name="gender"
                  id="gender1"
                  onChange={this.handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  checked={this.state.gender === 'Female'}
                  name="gender"
                  id="gender2"
                  onChange={this.handleChange}
                />
                <Form.Check
                  Inline
                  type="radio"
                  label="Other"
                  checked={this.state.gender === 'Other'}
                  name="gender"
                  id="gender3"
                  onChange={this.handleChange}
                />
              </Row>
            </Form.Group>
          </fieldset>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Stack Released Year (1950-2100</Form.Label>
            <Form.Control 
              type="number"
              value={this.state.phone ? this.state.phone : 1234567890}
              name="phone"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Control type="date" name="dob" placeholder="Due date" />
          <Button variant="primary" type="submit">
            Edit
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
  updateProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateProfile: UpdateCall,
}, dispatch);

export default connect(null, mapDispatchToProps)(StackForm);