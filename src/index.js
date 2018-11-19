import _ from 'lodash';
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './style.css';

class IpositaBusinessRequestTable extends Component {
    constructor(props) {
        super(props);
    }

    render (){
        const { 
            createBtnClass,
            createBtn,
            requestTable,
            sideView,
            umutiTable,
            tabOneTitle,
            tabTwoTitle,
            tabThreeTitle,
            tabFourTitle,
            requestTableClass,
            requestTablePadding
        } = this.props;

        return (
            <div className="row reset-row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                    <div className="shadowWrapper">
                        <div className="row reset-row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="umuti-box-shadow requestHeader">
                                    <div className="row">
                                        <div className="col-lg-6 request-header-title">
                                            <span className="createTitle">All Requests</span>
                                        </div>
                                        <div className="col-lg-6 header-buttons">
                                            <span className="submitButton">
                                                <button className={createBtnClass}>Filter</button>
                                            </span>
                                            {createBtn}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-reset">
                    <div className="row reset-row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12" style={{padding: requestTablePadding}}>
                            <div className={`tableDiv ${umutiTable}`}>
                                <div className="create-btn"><button className="white-btn">+ Create a Request</button></div>
                                <div className={requestTableClass}>
                                    <Tabs>
                                        <TabList>
                                            <Tab><h5><span className="table-title">{tabOneTitle}</span></h5></Tab>
                                            <Tab><h5><span className="table-title">{tabTwoTitle}</span></h5></Tab>
                                            <Tab><h5><span className="table-title">{tabThreeTitle}</span></h5></Tab>
                                            <Tab><h5><span className="table-title">{tabFourTitle}</span></h5></Tab>
                                        </TabList>
                                        <TabPanel>
                                            {requestTable}
                                        </TabPanel>
                                        <TabPanel>
                                            {requestTable}
                                        </TabPanel>
                                        <TabPanel>
                                            {requestTable}
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <div className="umuti-box-shadow">
                                {sideView}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default IpositaBusinessRequestTable;