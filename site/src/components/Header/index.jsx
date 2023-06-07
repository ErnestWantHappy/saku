import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";
import { Button } from "antd";
var a = "";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.mainStore;
    this.state = {
      homePage: {},
      dataImg1: {},
      classLang: "languageDiv",
      lang: 0,
      menuFlag:false
    };
  }
  //生命周期函数，在render之前执行
  componentWillMount() {
    this.setState({ data: this.props.dataImg1 });
  }

  //生命周期函数在组件挂载后（插入 DOM 树中）立即调用。render之后
  componentDidMount = async (e) => {
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
    }, 500);
  };

  //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  componentWillUpdate() {
    setTimeout(() => {}, 500);
  }

  changeLang = async (e) => {
    this.props.getMsg(e.target.value);
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
      this.setState({ dataImg1: this.props.dataImg1 });
    }, 100);
  };

  changeLanguage(index) {
    this.setState({ lang: index });
    index = index + 1;
    this.props.getMsg(index);
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
      this.setState({ dataImg1: this.props.dataImg1 });
    }, 100);
  }

  menuChange = () => {
    this.setState({ menuFlag: !this.state.menuFlag});
    console.log(this.state.menuFlag)
  }

  goTop=()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  

  render() {
    return (
      this.state.homePage.navigation && (
        <header>
          <div className="header-inner">
            <span className="title">
              <div className="logo">
                <Link to={"/"}>
                  <img src="/logo.png" width={80} height={55}></img>
                  <span>富士サクラリゾート</span>
                </Link>
              </div>
            </span>
            <div className="gnav">
              <div className="daohang">
                <Link to={"/hotel"}>
                  <span>{this.state.homePage.navigation[0]}</span>
                </Link>
                <Link to={"/hotel"}>
                  <span>{this.state.homePage.navigation[1]}</span>
                </Link>
                <Link to={"/hotel"}>
                  <span>{this.state.homePage.navigation[2]}</span>
                </Link>
                <Link to={"/hotel"}>
                  <span>{this.state.homePage.navigation[3]}</span>
                </Link>
                <Link to={"/hotel"}>
                  <span>交通指南</span>
                </Link>
              </div>
              {/* <select className="language" onChange={this.changeLang}>
              <option value={1}>中文</option>
              <option value={2}>英文</option>
              <option value={3}>日语</option>
            </select> */}
              <div className="languages">
                {this.state.homePage.language.map((item, index) => {
                  return (
                    <div
                      className={
                        index === this.state.lang ? this.state.classLang : ""
                      }
                      key={index}
                      onClick={this.changeLanguage.bind(this, index)}
                    >
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
              <div className="menu">
                <span className={
                        this.state.menuFlag === true ? "menu_open active" : "menu_open"
                      }  onClick={this.menuChange}></span>
              </div>
              <nav className={
                        this.state.menuFlag === true ? "menu-overplay" : "menu-overplay-hide"
                      }>
                  <div className="common-inner">
                      <div className="LogoImg"><img src="/logo.png" width={200} height={140}></img></div>
                      <div className="navList">
                        <div className="list">
                          <div>
                            <li className="liClass">
                            <Link to={"/hotel"}>
                            <span className="spanClass">酒店</span>
                            </Link>
                            </li>
                            <li className="liClass">
                            <Link to={"/hotel"}>
                            <span className="spanClass">民宿</span>
                            </Link>
                            </li>
                            <li className="liClass">
                            <Link to={"/hotel"}>
                            <span className="spanClass">美食</span>
                            </Link>
                            </li>
                          </div>
                          <div>
                          <li className="liClass">
                            <Link to={"/hotel"}>
                            <span className="spanClass">玩乐</span>
                            </Link>
                            </li>
                            <li className="liClass">
                            <Link to={"/hotel"}>
                            <span className="spanClass">交通指南</span>
                            </Link>
                            </li>
                            <li className="liClass">
                            <Link to={"/hotel"}>
                            <span className="spanClass">联系我们</span>
                            </Link>
                            </li>
                          </div>
                        </div>
                        <div className="divBtn"><Button size="large" type="primary" block="true">预定房间</Button></div>
                      </div>
                  </div>
              </nav>
            </div>
          </div>
          <div className="go-top" onClick={this.goTop}>
                page top
          </div>
          <div className="reserve">Reservation／予約する</div>
        </header>
      )
    );
  }
}
export default Header;
