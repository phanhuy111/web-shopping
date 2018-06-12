import React, { Component } from 'react';
import { auth } from './../Firebase';

const PasswordForgetPage = () =>
    <div>
        <PasswordForgetForm />
    </div>

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;
        auth.doPasswordReset(email)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });

        event.preventDefault();
    }

    render() {
        const { email,error } = this.state;

        const isInvalid = email === '';

        return (
            <div id="recover-password" style={{ display: 'none' }} class="userbox1">
                <div className="accounttype">
                    <h2 class="title">Phục hồi mật khẩu</h2>
                </div>
                <form accept-charset="UTF-8" action="/account/recover" method="post"  onSubmit={this.onSubmit}>
                    <input name="form_type" type="hidden" value="recover_customer_password" />
                    <input name="utf8" type="hidden" value="✓" />
                    <label for="email" class="icon-field"><i class="icon-login icon-envelope "></i></label>
                    <input type="email" value={this.state.email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} size="30" name="email" placeholder="Email" id="recover-email" class="text form-control" />
                    <div class="action_bottom">
                        <input class="btn btn-outline" disabled={isInvalid} type="submit" value="OK" />
                    </div>
                    { error && <p>{error.message}</p> }
                    <div class="req_pass">
                        <em>
                            <a href="/login" onclick="hideRecoverPasswordForm(); return false;">Quay về trang đăng nhập</a>
                        </em>
                    </div>
                </form>
            </div>
        );
    }
}



export default PasswordForgetPage;

export {
    PasswordForgetForm
};


