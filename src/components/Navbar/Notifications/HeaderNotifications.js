import React, { Component } from "react";
import NotificationItem from "../Notifications/NotificationItem";

export default class HeaderNotifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
    this.initialState = this.state;
  }

  componentDidMount = () => {
    let notifications = [
      {
        content: "5 new members joined today",
        theme: "fas fa-users mr-2 text-aqua",
        time:"5 mins"
      },
      {
        content: "Very long description here that may not fit into the page and may cause design problems",
        theme: "fas fa-envelope mr-2 text-yellow",
        time:"Yesterday"
      },
      {
        content: "5 new members joined",
        theme: "fas fa-users text-red",
        time:"1 hour"
      },
      {
        content: "25 sales made",
        theme: "fas fa-file mr-2 text-green",
        time:"50 mins"
      },
      {
        content: "You changed your username",
        theme: "fas fa-users text-red",
        time:"15 mins"
      },
    ];

    this.setState({
      notifications: notifications,
    });
  };

  render() {
    return (

      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">
            {this.state.notifications.length}
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <h6 class="dropdown-header">
            You have {this.state.notifications.length} notifications.
          </h6>
          <div className="scroll-menu ml-1">
            {this.state.notifications.map((notification, index) => {
              return (
                <NotificationItem
                  key={index}
                  content={notification.content}
                  theme={notification.theme}
                  time={notification.time}
                />
              );
            })}
          </div>
          <a href="#" className="dropdown-item dropdown-header">
            See All Notifications
          </a>
        </div>
      </li>
    );
  }
}
