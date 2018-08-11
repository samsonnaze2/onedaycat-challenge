import React from 'react';
import moment from 'moment';
import './style/style.css';
import Services from './services';
import {
    Warpper,
    Header,
    NavBar,
    ModalBS
} from '../../Global/components/index.jsx';
import SpinEffect from '../../Global/components/spinner-effect.jsx';
import {
    ProductList
} from './components/index.jsx';

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_page_ready: false,
            products_list: [],
            modal_message: {
                title: "",
                show: false,
                content: ""
            }
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    componentDidMount() {
        this.start();
    };

    async start() {
        const products_list = await Services.getProduct();
        this.setState({ products_list, is_page_ready: true });
    };

    handleAddToCart(product_id, detail) {
        let qty = prompt("จำนวน", "1");
        if (qty) {
            const payload = {
                user_id: 1,
                product_id,
                qty,
                create_at: moment().format('YYYY-MM-DD hh:mm'),
                detail
            }
            this.setState({ is_page_ready: false }, async () => {
                const resData = await Services.addToCart(payload, detail);
                this.setState({
                    modal_message: {
                        title: "Response Message",
                        show: true,
                        content: resData.msg
                    }
                }, this.start);
            });
        }
    };

    handleCloseModal() {
        const modal_message = {
            title: "",
            show: false,
            content: ""
        };
        this.setState({ modal_message });
    };

    render() {
        const { is_page_ready, products_list, modal_message } = this.state;
        return (
            <Warpper>
                <Header />
                <NavBar />
                {
                    is_page_ready ?
                    <div id="product-contrainer">
                        <ProductList
                            data={products_list}
                            handleAddToCart={this.handleAddToCart} />
                    </div> : 
                    <SpinEffect/>
                }
                <ModalBS
                    title={modal_message.title}
                    show={modal_message.show}
                    handleClose={this.handleCloseModal}>
                    <h3 className="text-center">{modal_message.content}</h3>
                </ModalBS>
            </Warpper>
        );
    };
};

export default PageHome;