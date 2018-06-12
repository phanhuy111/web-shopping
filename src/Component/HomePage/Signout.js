import React from 'react';

import { auth } from './../Firebase';

const SignOutButton = () =>
  <button
    style={{    borderColor: 'transparent' ,
                backgroundColor: 'transparent',
                padding: '0px 16px'
          }}
    className="dangki"
    type="button"
    onClick={auth.doSignOut}
  >
   <a>
    Đăng Xuất
    </a>
  </button>

export default SignOutButton;