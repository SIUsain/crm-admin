import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../actions/auth";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";




const Register = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  
  const onChangeFirstname = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  
  const onChangeLastname = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);

      dispatch(register(firstName, lastName,  email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    
  };
console.log(successful)
  return (
      <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm name="form" onSubmit={handleRegister} >
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className={"mb-3" + (successful && !firstName ? " has-error" : "")}>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="First Name" autoComplete="firstname" name="firstName"
              value={firstName}
              onChange={onChangeFirstname}
              //required
              />
              {successful && !firstName && (
              <div className="help-block">First Name is required</div>
            )}
                  </CInputGroup>
                  <CInputGroup className={"mb-3" + (successful && !lastName ? " has-error" : "")}>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Last Name" autoComplete="lastname" name="lastName"
              value={lastName}
              onChange={onChangeLastname}/>
              {successful && !lastName && (
              <div className="help-block">Last Name is required</div>
            )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" name="email"
              value={email}
              onChange={onChangeEmail}
              //required
              />
              {successful && !email && (
              <div className="help-block">Email is required</div>
            )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" name="password"
              value={password}
              onChange={onChangePassword}
              //required
              />
              {successful && !password && (
              <div className="help-block">Password is required</div>
            )}
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton type="submit" color="success" block>Create Account</CButton>
                    <span>You have an account already? Go to <Link to="/login" >
                       Login Page
                      </Link>
                    </span>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
        {successful && 
        <p>hello</p>
        }
      </CContainer>
    </div>
    );
  }
  export default Register;