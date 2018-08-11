import React from 'react';
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
    FormConfig
} from './components/index.jsx';

class PageConfig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_page_ready: false,
            apiType: "",
            modal_message: {
                title: "",
                show: false,
                content: ""
            }
        };
        this.handleClearData = this.handleClearData.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {
        this.start();
    };

    async start() {
        const apiType = localStorage.getItem("apiType");
        this.setState({ is_page_ready: true, apiType });
    };

    handleClearData(apiType) {
        this.setState({ is_page_ready: false }, async () => {
            await Services.clearData(apiType);
            this.setState({
                modal_message: {
                    title: "Response Message",
                    show: true,
                    content: "Clear Data Success!"
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

    handleSubmit() {
        const { apiType } = this.state;
        localStorage.setItem("apiType", apiType);
        const modal_message = {
            title: "Response Message",
            show: true,
            content: "Save Success! Please Refresh Page"
        };
        this.setState({ modal_message });
    };

    handleChange(key, value) {
        this.setState({ [key]: value });
    };

    render() {
        const { is_page_ready, modal_message, apiType } = this.state;
        return (
            <Warpper>
                <Header />
                <NavBar />
                {
                    is_page_ready ?
                        <div id="product-contrainer">
                            <FormConfig
                                apiType={apiType}
                                handleSubmit={this.handleSubmit}
                                handleClearData={this.handleClearData}
                                handleChange={this.handleChange} />
                        </div> :
                        <SpinEffect />
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

export default PageConfig;