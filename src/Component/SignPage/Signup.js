import React, { Component } from 'react';
import {
    withRouter,
} from 'react-router-dom';
import { auth, db } from './../Firebase';
import * as routes from './../Constant/routes';


const SignupPage = ({ history }) =>
    <div>
        <SignUpForm history={history} />
    </div>

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};



class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
          username,
            email,
            passwordOne
        } = this.state;

        const {
          history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {

                // Create a user in your own accessible Firebase Database too
                db.doCreateUser(authUser.uid, username, email)
                    .then(() => {
                        this.setState(() => ({ ...INITIAL_STATE }));
                        history.push(routes.HOMEPAGE);
                    })
                    .catch(error => {
                        this.setState(updateByPropertyName('error', error));
                    });

            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

        event.preventDefault();
    }

    render() {

        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            username === '' ||
            email === '';

        return (
            <div id="create-account" class="col-md-10 col-sm-6 col-xs-12">
                <div id="" class="userbox">
                    <div class="accounttype">
                        <h2 class="title">Tạo tài khoản</h2>
                    </div>
                    <div id="info_create_account">
                        <p>Tạo tài khoản để dễ dàng hơn trong việc mua sắm và kiểm tra các đơn đặt của bạn !</p>
                        <div class="action_bottom1">
                            <a class="btn btn-outline"  onclick="showRegisterForm(); return false;">
                                <span>
                                    <i class="fa fa-user tren"></i>&nbsp;
                                    Tạo tài khoản
                                </span>
                            </a>
                        </div>
                    </div>
                    <form accept-charset="UTF-8" action="/account" id="create_customer" method="post" onSubmit={this.onSubmit}>
                        <input name="form_type" type="hidden" value="create_customer" />
                        <input name="utf8" type="hidden" value="✓" />
                        <div id="first_name" class="cacdong">
                            <label for="first_name" class="label-register">UserName</label>
                            <input type="text" value={username} onChange={event => this.setState(updateByPropertyName('username', event.target.value))} name="customer[first_name]" placeholder="UserName" id="first_name" class="text form-control" size="30" />
                        </div>
                        <div id="email" class="cacdong">
                            <label for="email" class="label-register">Email</label>
                            <input type="email" value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} placeholder="Email" name="customer[email]" id="email" class="text form-control" size="30" />
                        </div>
                        <div id="password" class="cacdong">
                            <label for="password" class="label-register">Password</label>
                            <input pattern=".{5,}" title="tối thiểu 5 kí tự" type="password" value={passwordOne} onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))} placeholder="Password" name="customer[password]" id="password" class="password text form-control" size="30" />
                        </div>
                        <div id="password" class="cacdong">
                            <label for="password" class="label-register">Confirm Password</label>
                            <input pattern=".{5,}" title="tối thiểu 5 kí tự" type="password" value={passwordTwo} onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))} placeholder="Confirm Password" name="customer[password]" id="password" class="password text form-control" size="30" />
                        </div>
                      
                            {error && <p>{error.message}</p>}
                        <button abled={isInvalid} type="submit" className="kidang">
                            Đăng Kí
                        </button>
                        <div class="action_bottom">
                            <em>
                                <a onclick="hideRegisterForm();return false;">Quay lại</a>
                            </em>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupPage);

export {
    SignUpForm
};

