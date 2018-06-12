import React from 'react';

import PropTypes from 'prop-types';
import withAuthentication from './../Session/withAuthentication';
import Signout from './Signout';

const ChangeInfor = (props, { authUser }) =>
    <div>
        {authUser ?
            (
                <div className="dangnhap">
                    <h1 style={{ fontSize: '15px', padding: '5px 0px', marginLeft:'-39px' }} > Xin Chào : {authUser.email} </h1>
                    <Signout />
                </div>
            )
            : (

                <div className="dangnhap">
                    <div className="dangnhap1"> <a href="/login">Đăng Nhập và Đăng Kí</a></div>
                </div>
            )}
    </div>

ChangeInfor.contextTypes = {
    authUser: PropTypes.object,
};

export default withAuthentication(ChangeInfor);