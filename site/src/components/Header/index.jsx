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
      menuFlag: false,
      langFlag: false,
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

  changeLanguage = (index) => {
    console.log(index);
    this.setState({ lang: index });
    index = index + 1;
    this.props.getMsg(index);
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
      this.setState({ dataImg1: this.props.dataImg1 });
    }, 100);
  };

  menuChange = () => {
    this.setState({ menuFlag: !this.state.menuFlag });
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    console.log(this.state.menuFlag);
  };

  languageClick = () => {
    this.setState({ langFlag: !this.state.langFlag });
    console.log(this.state.langFlag);
  };

  goTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      this.state.homePage && (
        <header>
          <div className="header-inner">
            <div className="gnav">
              <div className="menu">
                <span
                  className={
                    this.state.menuFlag === true
                      ? "menu_open active"
                      : "menu_open"
                  }
                  onClick={this.menuChange}
                ></span>
              </div>
              <nav
                className={
                  this.state.menuFlag === true
                    ? "menu-overplay"
                    : "menu-overplay-hide"
                }
              >
                <div className="common-inner">
                  <div className="LogoImg">
                    <img src="/SAKURA1.png" width={200} height={180}></img>
                  </div>
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
                  </div>
                </div>
                <div className="divBtnArea">
                  <div className="kong"></div>
                  <div className="divBtn">Reservation／予約する</div>
                </div>
              </nav>
            </div>
          </div>
          <div
            className={
              this.state.langFlag === true
                ? "language-area isopen"
                : "language-area"
            }
            onClick={this.languageClick}
          >
            <div className="language">
              <div className="language-inner">
                <div className="language-head">
                  <span className="language-target-txt">Language</span>
                </div>
                <div className="language-body">
                  <ul className="language-list">
                    <li
                      className="language-list-item"
                      onClick={() => this.changeLanguage(0)}
                    >
                      日本语
                    </li>
                    <li
                      className="language-list-item"
                      onClick={() => this.changeLanguage(1)}
                    >
                      English
                    </li>
                    <li
                      className="language-list-item"
                      onClick={() => this.changeLanguage(2)}
                    >
                      中文
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="go-top" onClick={this.goTop}>
                page top
          </div> */}
          <div className="reserve">Reservation／予約する</div>
        </header>
      )
    );
  }
}
export default Header;
