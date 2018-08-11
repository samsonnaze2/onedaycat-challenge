import React from 'react';
import './style/style.css';
import Services from './services';
import {
    Warpper,
    Header,
    NavBar
} from '../../Global/components/index.jsx';
import SpinEffect from '../../Global/components/spinner-effect.jsx';
import {
    HistoryList
} from './components/index.jsx';

class PageHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_page_ready: false,
            history_list: []
        };
    };

    componentDidMount() {
        this.start();
    };

    async start() {
        const history_list = await Services.getHistoryData();
        this.setState({ history_list, is_page_ready: true });
    };

    render() {
        const { is_page_ready, history_list } = this.state;
        return (
            <Warpper>
                <Header />
                <NavBar />
                {
                    is_page_ready ?
                    <div id="product-contrainer">
                        <HistoryList
                            data={history_list} />
                    </div> : 
                    <SpinEffect/>
                }
            </Warpper>
        );
    };
};

export default PageHistory;