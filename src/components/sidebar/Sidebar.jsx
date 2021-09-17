import { LineStyle, Timeline, TrendingUp, PermIdentityOutlined, Storefront, AttachMoney, AssessmentOutlined, MailOutlineOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined, WorkOutlineOutlined, TimelineOutlined, Report } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        </Link>
                          <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
          {/* ------------Quick Menu---------   */}
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                      <Link to="/users" className="link">   
                        <li className="sidebarListItem">
                            <PermIdentityOutlined className="sidebarIcon" />
                            User
                        </li>
                      </Link>
                      <Link to="/products" className="link">  
                          <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />
                            Products
                        </li>
                      </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentOutlined className="sidebarIcon" />
                            Reports
                        </li>
                        
                    </ul>
                </div>
       {/* ------------Notifications ---------   */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlined  className="sidebarIcon" />
                            Mail
                        </li>
                          <li className="sidebarListItem">
                            <DynamicFeedOutlined className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className="sidebarIcon" />
                            Messages
                        </li>
                        
                    </ul>
                </div>
        {/* ----------------Staff------------------  */}

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className="sidebarIcon" />
                            Manage
                        </li>
                          <li className="sidebarListItem">
                            <TimelineOutlined className="sidebarIcon" />
                              Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                        
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

