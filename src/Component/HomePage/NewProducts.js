import React, { Component } from 'react';

class NewProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            itemsToShow: 6,
            expanded: false,
            filteredData: [],          
        }
        this.showMore = this.showMore.bind(this);
        this.filterData = this.filterData.bind(this);
        this.filterData1 = this.filterData1.bind(this);
        this.showAll = this.showAll.bind(this);
    }
    
    componentDidMount() {
        fetch('https://5a6f2daf7a276d0012b2f64e.mockapi.io/newproduct')
            .then((Response) => Response.json())
            .then((findresponse) => {
                this.setState({
                    data: findresponse,
                    filteredData: findresponse
                })
            })
    }
    
    showAll(){
        this.setState({
            filteredData: this.state.data
        })
    }

    filterData(event) {
    event.preventDefault();    
    const filtered = this.state.data.filter(function(e) {            
            return (e.type === 'type 1' );
        });
        
        this.setState({
          filteredData: filtered,
        }); 
    }

    filterData1(event) {
        event.preventDefault();    
        const filtered1 = this.state.data.filter(function(e) {            
                return (e.type === 'type 2' );
            });
            this.setState({
              filteredData: filtered1,
            }); 
        }
    
    showMore() {
        this.state.itemsToShow === 6 ? (
            this.setState({ itemsToShow: this.state.data.length, expanded: true })
        ) : (
                this.setState({ itemsToShow: 6, expanded: false })
            )
    }

    render() {
        // const { filteredData } = this.state;
        return (
            <div>
                <section>
                    <h1>Sản Phẩm Mới</h1>
                    <div className="tieude">
                        <nav>
                            <ul>
                                <li class="nav-item"  >< a className="tatca" onClick={this.showAll.bind(this)}>Tất Cả</a></li>
                                <li class="nav-item"  >< a className="thoitrangnam"  onClick={this.filterData.bind(this)}>Thời Trang Nam</a></li>
                                <li class="nav-item"  >< a className="thoitrangnu" onClick={this.filterData1.bind(this)} >Thời Trang Nữ</a></li>
                                <li class="nav-item"  >< a className="phukien" >Phụ Kiện</a></li>
                                <li class="nav-item"  >< a className="auphuc" >Âu Phục</a></li>
                                <li class="nav-item"  >< a className="noibat" >Nổi Bật</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="sanphammoi" id="11">
                        {
                            this.state.filteredData.slice(0, this.state.itemsToShow).map((e, key) =>
                                <ul className="thoitrangnu wow bounceInUp" key={key} >
                                    <li><a href="/product"><img alt="" src={e.picture1} /></a>
                                    </li>
                                    <div className="thongtinsanpham" style={{ marginLeft: '75px'}}>
                                        <a href="/product">{e.name}</a>
                                        <p style={{ marginLeft: '13px'}}>{e.price}$</p>
                                    </div>
                                </ul>
                            )
                        }
                    </div>

                    <div className="nutxem1 wow bounceInUp " data-wow-delay="0.5s" onClick={this.showMore}>
                        {this.state.expanded ? (
                           <p className="chusanpham"> KHÔNG CÒN SẢN PHẦM </p>
                        ) : (
                            <button className="xem1 "> Xem Thêm <i className="fa fa-chevron-down" aria-hidden="true"></i></button>
                            )
                        }
                    </div>

                </section>
            </div>
        )
    }
}

export default NewProducts;
