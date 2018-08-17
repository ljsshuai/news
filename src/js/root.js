import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import PCNewsDetails from './components/pc_news_detail';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';
import PCUserCenter from './components/pc_usercenter';
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/" components={PCIndex}></Route>
                    <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                    <Route path="/usercenter" component={PCUserCenter}></Route>
                </Router>
            </div>
        );
    };
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
