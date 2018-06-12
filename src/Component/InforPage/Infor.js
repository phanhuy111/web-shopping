import React, { Component } from 'react';
import firebase from './firebase';

class Infor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput1: '',
            textInput2: '',
            textInput3: '',
            textInput4: '',
            textInput5: '',
            textInput6: '',
            textInput7: '',
            todos: []
        };
        this.updateTextInput1 = this.updateTextInput1.bind(this);
        this.updateTextInput2 = this.updateTextInput2.bind(this);
        this.updateTextInput3 = this.updateTextInput3.bind(this);
        this.updateTextInput4 = this.updateTextInput4.bind(this);
        this.updateTextInput5 = this.updateTextInput5.bind(this);
        this.updateTextInput6 = this.updateTextInput6.bind(this);
        this.updateTextInput7 = this.updateTextInput7.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateTextInput1 = (e) => { this.setState({ 
        textInput1: e.target.value, 
    }) }

    updateTextInput2 = (e) => { this.setState({ 
        textInput2: e.target.value, 
    }) }

    updateTextInput3 = (e) => { this.setState({ 
        textInput3: e.target.value, 
    }) }

    updateTextInput4 = (e) => { this.setState({ 
        textInput4: e.target.value, 
    }) }

    updateTextInput5 = (e) => { this.setState({ 
        textInput5: e.target.value, 
    }) }

    updateTextInput6 = (e) => { this.setState({ 
        textInput6: e.target.value, 
    }) }

    updateTextInput7 = (e) => { this.setState({ 
        textInput7: e.target.value, 
    }) }


    onSubmit = (e) => {

        e.preventDefault();
        const itemsRef = firebase.database().ref('todos');
        const todo = {
            hoten: this.state.textInput1,
            email: this.state.textInput2,
            ngaysinh: this.state.textInput3,
            nam: this.state.textInput4,
            nu: this.state.textInput5,
            thangsinh: this.state.textInput6,
            namsinh: this.state.textInput7
        }
        itemsRef.push(todo);
        this.setState({
            textInput1: '',
            textInput2: '',
            textInput3: '',
            textInput4: '',
            textInput5: '',
            textInput6: '',
            textInput7: '',
        });
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('todos');
        itemsRef.on('value', (snapshot) => {
            let todos = snapshot.val();
            let newState = [];
            for (let todo in todos) {
                newState.push({
                    id: todo,
                    hoten: todos[todo].hoten,
                    email: todos[todo].email,
                    ngaysinh: todos[todo].ngaysinh,
                    nam: todos[todo].nam,
                    nu: todos[todo].nu,
                    thangsinh: todos[todo].thangsinh,
                    namsinh: todos[todo].namsinh
                });
            }
            this.setState({
                todos: newState
            });
        });
    }

    render() {

        return (
            <div>
                <div className="account-profile register-form">
                    <h1 className="have-margin">Cập Nhật Thông Tin</h1>
                    <form className="content" method="post" ref={ form => this.form = form } onSubmit={this.onSubmit} id="edit-account">
                        <div className="form-group">
                            <label className="control-label" for="full_name">Họ Tên </label>
                            <div className="input-wrap">
                                <input value={this.state.textInput1.hoten} onChange={this.updateTextInput1} type="text" name="full_name" className="form-control" id="full_name" placeholder="Họ tên" />
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label off" for="email">Email</label>
                            <div className="input-wrap">
                                <input value={this.state.textInput2.email} onChange={this.updateTextInput2} type="email" className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group gender-select-wrap" id="register_name">
                            <label className="control-label" for="pasword">Giới tính</label>
                            <div className="input-wrap">
                                <div className="row">
                                    <div className="col-xs-4">
                                        <label>
                                            <input value={this.state.textInput4.nam} onChange={this.updateTextInput4} type="radio" name="gender" id="male" className="gender" />
                                            <span>
                                                <i className="ico"></i>
                                            </span>
                                            Nam
                                          </label>
                                    </div>
                                    <div className="col-xs-4">
                                        <label>
                                            <input value={this.state.textInput5.nu} onChange={this.updateTextInput5} type="radio" name="gender" id="female" className="gender" />
                                            <span>
                                                <i className="ico"></i>
                                            </span>
                                            Nữ
                                         </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
                            <label className="control-label no-lh" for="birthdate">
                                Ngày Sinh
                            </label>
                            <div className="input-wrap">
                                <div id="birthday-picker" className="birthday-picker"><fieldset className="birthday-picker"><select value={this.state.textInput3.ngaysinh} onChange={this.updateTextInput3} className="birth-day form-control" name="birth[day]"><option value="0">Ngày</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10" selected="selected">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select><select value={this.state.textInput6.thangsinh} onChange={this.updateTextInput6} className="birth-month form-control" name="birth[month]"><option value="0">Tháng</option><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10" selected="selected">10</option><option value="11">11</option><option value="12">12</option></select><select value={this.state.textInput7.namsinh} onChange={this.updateTextInput7} className="birth-year form-control" name="birth[year]"><option value="0">Năm</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000" selected="selected">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option><option value="1900">1900</option><option value="1899">1899</option><option value="1898">1898</option></select><input type="hidden" name="birthdate" id="birthdate" /></fieldset></div>
                                <span className="help-block"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-wrap margin">
                                <button type="submit" className="btn btn-info btn-block btn-update"
                                >
                                    Cập nhật</button>
                            </div>
                        </div>
                    </form>

                </div>
                
                <div>
                {this.state.todos.map((todo) => {
                    return (
                        <div className="account-profile1 register-form1" >
                        <h1 className="have-margin">Thông Tin Của Tôi</h1>
                        <form className="content1" method="post" id="edit-account">
                            <div className="form-group1">
                                <label className="control-label1" for="full_name">Họ Tên: </label>
                                <div className="input-wrap1">
                                    <span className="help-block1">{todo.hoten}</span>
                                </div>
                            </div>
                            <div className="form-group1">
                                <label className="control-label off" for="email">Email: </label>
                                <div className="input-wrap">
                                    <span className="help-block">{todo.email}</span>
                                </div>
                            </div>
                            <div className="form-group1 gender-select-wrap1" id="register_name">
                                <label className="control-label1" for="pasword">Giới tính: </label>
                                <div className="input-wrap1">
                                    <span>{todo.nam}</span>
                                </div>
                            </div>
                            <div className="form-group1 ">
                                <label className="control-label1 no-lh" for="birthdate">
                                    Ngày Sinh:
                            </label>
                                <div>
                                    {todo.ngaysinh} /  {todo.thangsinh} / {todo.namsinh}
                                </div>
                            </div>
                        </form>
                    </div>
                    )
                  })}
                </div>

                <div className="content-right">
                    <h1 className="have-margin">Đơn hàng của tôi</h1>
                    <div className="dashboard-order have-margin">
                        <table className="table-responsive-2 list" >
                            <thead>
                                <tr>
                                    <th>
                                        <span className="hidden-xs hidden-sm hidden-md">Mã đơn hàng</span>
                                    </th>
                                    <th>Ngày mua</th>
                                    <th>Sản phẩm</th>
                                    <th>Tổng tiền</th>
                                    <th>
                                        <span className="hidden-xs hidden-sm hidden-md">Trạng thái</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="/sales/order/view?code=34003480">34003480</a></td>
                                    <td>26/06/2016</td>
                                    <td> Phân Tích Hướng Giải Tối Ưu Chinh Phục Bài Tập</td>
                                    <td>100.600 &nbsp; ₫</td>
                                    <td>
                                        <span className="order-status">
                                            Giao hàng thành công
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="list-pager">
                    </div>
                </div>
            </div>
        );
    }
}


export default Infor;


