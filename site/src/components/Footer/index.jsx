import { Button } from "antd";
import React from "react";
import "./index.scss";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.mainStore;
    this.state = {
      homePage: {},
    };
  }

  //生命周期函数，在render之前执行
  componentWillMount() {
    this.setState({ homePage: this.props.homePage });
  }

  //生命周期函数在组件挂载后（插入 DOM 树中）立即调用。render之后
  componentDidMount = async (e) => {};

  //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  componentWillUpdate() {
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
    }, 500);
    // console.log(this.props.homePage.bottom&&this.props.homePage.bottom.title)
    // console.log(this.state.homePage.bottom&&this.state.homePage.bottom.title)
  }

  render() {
    return (
      this.state.homePage.navigation && (
        <footer>
          <div className="footer">
            <div className="footleft">
              <img src="./SAKURA1.png" width={100} height={100}></img>
              <div className="info">
                <div>〒400-1131</div>
                <div>山梨県甲斐市亀沢6949-96</div>
                <div>Tel：055-260-3100</div>
                <div>Mail：yoyaku@sakuraresort.jp</div>
                <div className="tubiao">
                  <li>
                    <img src="./instagram.png" width={20}></img>Instagram
                  </li>
                  <li>
                    <img src="./facebook.png" width={20}></img>Facebook
                  </li>
                </div>
              </div>
            </div>
            <div className="footright">
              <div className="top">
                <div className="list">
                  <div>
                    <li className="liClass">
                      <Link to={"/hotel"}>
                        <span className="spanClass">{this.state.homePage.navigation[0]}</span>
                      </Link>
                    </li>
                    <li className="liClass">
                      <Link to={"/hotel"}>
                        <span className="spanClass">{this.state.homePage.navigation[1]}</span>
                      </Link>
                    </li>
                    <li className="liClass">
                      <Link to={"/hotel"}>
                        <span className="spanClass">{this.state.homePage.navigation[2]}</span>
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="liClass">
                      <Link to={"/hotel"}>
                        <span className="spanClass">{this.state.homePage.navigation[3]}</span>
                      </Link>
                    </li>
                    <li className="liClass">
                      <Link to={"/hotel"}>
                        <span className="spanClass">{this.state.homePage.navigation[4]}</span>
                      </Link>
                    </li>
                    <li className="liClass">
                      <Link to={"/hotel"}>
                        <span className="spanClass">{this.state.homePage.navigation[5]}</span>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
              <div className="bottom">©2021 Liberty. All Rights Reserved.</div>
            </div>
          </div>
        </footer>
      )
    );
  }
}

export default Footer;
