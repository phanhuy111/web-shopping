import React, { Component } from 'react';

import PasswordReturn from './PasswordReturn';
import Signup from './Signup';

import { withRouter } from 'react-router-dom';
import { auth } from './../Firebase';
import * as routes from './../Constant/routes';

const Signin = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
      }
    
      onSubmit = (event) => {
        const {
          email,
          password,
        } = this.state;
    
        const {
          history,
        } = this.props;
    
        auth.doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOMEPAGE);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });
    
        event.preventDefault();
      }

    render() {
        
        const {
            email,
            password,
            error,
          } = this.state;
      
          const isInvalid =
            password === '' ||
            email === '';

        return (
            <div class="trangdangnhap">
                <div class="container trang9">
                    <div class="row dong9">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div id="login" class="userbox">
                                <div class="dangnhap">
                                    <h2 class="title">Đăng nhập</h2>
                                </div>
                                <form accept-charset="UTF-8" action="/account/login" id="customer_login" method="post" onSubmit={this.onSubmit}>
                                    <input name="form_type" type="hidden" value="customer_login" />
                                    <input name="utf8" type="hidden" value="✓" />
                                    <div class="email">
                                        <label for="customer_email" class="diachi">Địa chỉ Email</label>
                                        <input type="email" value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} name="customer[email]" id="customer_email" placeholder="Email" class="text form-control" />
                                    </div>

                                    <div class="matkhau">
                                        <label for="customer_password" class="matkhau">Mật khẩu</label>
                                        <input pattern=".{5,}" title="Tối thiểu 5 kí tự" type="password" value={password} onChange={event => this.setState(updateByPropertyName('password', event.target.value))} name="customer[password]" id="customer_password" placeholder="Mật khẩu" class="text form-control" size="16" />
                                    </div>

                                    <div class="req_pass">
                                        <p>
                                            <em>
                                                <a onclick="showRecoverPasswordForm();return false;" class="quenmk">Quên mật khẩu? </a> /
                                                <a href="/" title="về trang chủ"> Quay về trang chủ</a>
                                            </em>
                                        </p>
                                    </div>
                                    <div class="action_bottom">
                                        <button type="submit" class="btn btn-outline dangnhap2" disabled={isInvalid} >
                                            <span>
                                                <i class="fa fa-lock"></i>&nbsp;
                                                Đăng Nhập
                                            </span>
                                        </button>
                                        { error && <p>{error.message}</p> }
                                    </div>
                                </form>
                            </div>
                            < PasswordReturn />
                        </div>
                        <Signup />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignInForm);

export {
  Signin
};