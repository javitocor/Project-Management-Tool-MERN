/* eslint-disable radix */
/* eslint-disable vars-on-top */
/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Container, Form, Row, Col} from 'react-bootstrap';
import { UpdateCall } from '../helpers/apiCalls';
import style from '../style/ProfileForm.module.css';

class ProfileForm extends React.Component{
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { user  } = location.state;
    this.state= {
      gender: user.gender,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    if (event.target.name === 'gender') {
      this.setState({[event.target.name]: event.target.checked})
    }
    this.setState({[event.target.name]: event.target.value})
  }

  onFileChange = (e) => {
    this.setState({ avatar: e.target.files[0] })
  }

  async handleSubmit (event) {    
    event.preventDefault();
    const { location, updateProfile } = this.props;
    const { user  } = location.state;
    const updated = {...user, ...this.state}
    const token = this.getCookie('csrftoken');
    try {
      const formData = new FormData();
      formData.append('avatar', updated.avatar)
      formData.append('firstname', updated.firstname)
      formData.append('lastname', updated.lastname)
      formData.append('phone', parseInt(updated.phone))
      formData.append('country', updated.country)
      formData.append('city', updated.city)
      formData.append('email', updated.email)
      formData.append('gender', updated.gender)
      formData.append('about', updated.about)
      formData.append('work_status', updated.work_status)
      formData.append('dob', updated.dob) 
      await updateProfile('profile', token, formData, user._id);
      this.props.history.push('/profile');
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
      <div className={style.content}>
        <Container className="bg-light text-dark p-5">
          <h1 className='mb-3'>Edit Profile</h1>
          <Form onSubmit={this.handleSubmit} className='mb-3'>
            <Row className="mb-2">
              <Col>
                <Form.Label>FirstName</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter firstname" 
                  defaultValue={user.firstname}
                  name="firstname"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Label>LastName</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter lastname" 
                  defaultValue={user.lastname}
                  name="lastname"
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>About</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5}
                defaultValue={user.about}
                placeholdere='Tell us about you'
                name="about"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                defaultValue={user.email}
                name="email"
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            
            <Form.Group className='mb-3'>
              <Form.Label>Work Status</Form.Label>
              <Form.Control
                as="select"
                aria-label="Floating label select example"
                name='work_status'
                onChange={this.handleChange}
                defaultValue={user.work_status}
              >
                <option>Open this select menu</option>
                <option value="Working">Working</option>
                <option value="Searching">Searching</option>
                <option value="Freelance">Freelance</option>
              </Form.Control>
            </Form.Group>
           
            <Row className="mb-2">
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter city" 
                  defaultValue={user.city}
                  name="city"
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Country</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter country" 
                  defaultValue={user.country}
                  name="country"
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <fieldset>
              <Form.Group as={Row} className="mb-3 w-100">
                <Form.Label as="legend" column sm={2}>
                  Gender
                </Form.Label>
                <Row sm={8}>
                  <Form.Check
                    inline
                    type="radio"
                    label="Male"
                    checked={this.state.gender === 'Male'}
                    name="gender"
                    id="gender1"
                    value='Male'
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Female"
                    checked={this.state.gender === 'Female'}
                    name="gender"
                    id="gender2"
                    value='Female'
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Other"
                    checked={this.state.gender === 'Other'}
                    name="gender"
                    id="gender1"
                    value='Other'
                    onChange={this.handleChange}
                  />
                </Row>
              </Form.Group>
            </fieldset>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="number"
                defaultValue={user.phone}
                name="phone"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>DOB</Form.Label>
              <Form.Control type="date" name="dob" placeholder={user.dob} onChange={this.handleChange} defaultValue={user.dob} />
            </Form.Group>
            <Row className='mt-3'>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Github</Form.Label>
                  <Form.Control 
                    type="github" 
                    placeholder="Enter github"
                    defaultValue={user.github}
                    name="github"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Angelist</Form.Label>
                  <Form.Control 
                    type="angelist" 
                    placeholder="Enter angelist"
                    defaultValue={user.angelist}
                    name="angelist"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Linkedin</Form.Label>
                  <Form.Control 
                    type="linkedin" 
                    placeholder="Enter linkedin"
                    defaultValue={user.linkedin}
                    name="linkedin"
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="form-group">
              <input type="file" onChange={this.onFileChange} name='avatar' />
            </div>
            <Button variant="outline-secondary" type="submit" className='mt-3'>
              Edit Profile
            </Button>
          </Form>
        </Container>
      </div>
    );
  };
};

ProfileForm.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ 
      user: PropTypes.object.isRequired, 
    }),
  }).isRequired,  
  updateProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateProfile: UpdateCall,
}, dispatch);

export default connect(null, mapDispatchToProps)(ProfileForm);