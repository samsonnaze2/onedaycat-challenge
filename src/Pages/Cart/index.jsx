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
    CartList
} from './components/index.jsx';

class PageCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_page_ready: false,
            credit_card_no: "",
            cart_list: [],
            modal_message: {
                title: "",
                show: false,
                content: ""
            }
        };
        this.handleSubmitPayment = this.handleSubmitPayment.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    componentDidMount() {
        this.start();
    };

    async start() {
        const cart_list = await Services.getCartData();
        this.setState({ cart_list, is_page_ready: true });
    };

    handleSubmitPayment() {
        const { credit_card_no, cart_list } = this.state;
        const payload = {
            user_id: 1,
            credit_card_no,
            create_at: moment().format('YYYY-MM-DD hh:mm'),
            cart_list
        };
        this.setState({ is_page_ready: false }, async () => {
            const resData = await Services.submitPayment(payload);
            this.setState({
                modal_message: {
                    title: "Response Message",
                    show: true,
                    content: resData.msg
                }
            }, this.start);
        });
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
        const { is_page_ready, cart_list, modal_message } = this.state;
        return (
            <Warpper>
                <Header />
                <NavBar />
                {
                    is_page_ready ?
                    <div id="product-contrainer">
                        {
                            cart_list.length > 0 ?
                                <CartList
                                    data={cart_list}
                                    sumData={Services.getSumPrice(cart_list)}
                                    handleSubmitPayment={this.handleSubmitPayment}
                                    onChangeCardNo={credit_card_no => this.setState({ credit_card_no })} /> :
                                <h1>ไม่พบข้อมูลในตระกร้าสินค้า</h1>
                        }
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

export default PageCart;