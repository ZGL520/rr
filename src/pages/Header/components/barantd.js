import React from 'react'
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';





/* eslint global-require:0, no-nested-ternary:0 */
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

const data = [
    {
        value: '1',
        label: '主页',
        // children: [
        //     {
        //         label: 'All Foods',
        //         value: '1',
        //         disabled: false,
        //     },
        //     {
        //         label: 'Chinese Food',
        //         value: '2',
        //     }, {
        //         label: 'Hot Pot',
        //         value: '3',
        //     }, {
        //         label: 'Buffet',
        //         value: '4',
        //     }, {
        //         label: 'Fast Food',
        //         value: '5',
        //     }, {
        //         label: 'Snack',
        //         value: '6',
        //     }, {
        //         label: 'Bread',
        //         value: '7',
        //     }, {
        //         label: 'Fruit',
        //         value: '8',
        //     }, {
        //         label: 'Noodle',
        //         value: '9',
        //     }, {
        //         label: 'Leisure Food',
        //         value: '10',
        //     }],
    }, {
        value: '2',
        label: '登陆/注册',
        // children: [
        //     {
        //         label: 'All Supermarkets',
        //         value: '1',
        //     }, {
        //         label: 'Supermarket',
        //         value: '2',
        //         disabled: true,
        //     }, {
        //         label: 'C-Store',
        //         value: '3',
        //     }, {
        //         label: 'Personal Care',
        //         value: '4',
        //     }],
    },
    {
        value: '3',
        label: '注销',
        isLeaf: true,
        // children: [
        //     {
        //         label: 'you can not see',
        //         value: '1',
        //     },
        // ],
    },
    {
        value: '4',
        label: '个人中心',

    }
];

//antd菜单
class Barantd extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: data,
                });
            }, 500);
        }
    }

    render() {
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
                className="foo-menu"
                data={initData}
                value={['1', '3']}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.6}
            />
        );
        const loadingEl = (
            <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div className={show ? 'menu-active' : ''}>
                <div>
                    <NavBar
                        leftContent="Menu"
                        mode="light"
                        // iconName={require('./menu.svg')}
                        onLeftClick={this.handleClick}
                        className="top-nav-bar"
                        rightContent={[
                            <Link className='fontWhite' key='1' to={this.props.rightLink}>{this.props.rightLinkContent}</Link>
                        ]}
                    >
                        {this.props.title}
                    </NavBar>
                </div>
                {show ? initData ? menuEl : loadingEl : null}
            </div>
        );
    }
}

export default Barantd



