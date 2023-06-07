import { Header, Footer } from "@/components";
import Home from "../Home";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./index.scss";
import { getdata1, getdata2,getdata3 } from "@/api/api";
import  Hotel  from "../Hotel";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.mainStore;
    this.state = {
      homePage: {},
      dataImg1: {},
      dataImg2: {},
      dataImg3: {},
      langId: 1
    };
  }

  //生命周期函数，在render之前执行
  componentWillMount() {
    this.getChildMsg(this.state.langId)
  }

  //生命周期函数在组件挂载后（插入 DOM 树中）立即调用。render之后
  async componentDidMount() {
  }

  //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  componentWillUpdate() {
  }


  getChildMsg = (msg) => {
    setTimeout(() => {
      this.setState({ langId: msg });
    }, 100);
    if (msg == 1) {
      getdata1()
        .then((res) => {
          this.setState({ homePage: res.homePage });
          this.setState({ dataImg1: res.dataImg1,
            dataImg2: res.dataImg2,
            dataImg3: res.dataImg3,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (msg == 2) {
      getdata2()
        .then((res) => {
          this.setState({ homePage: res.homePage });
          this.setState({ dataImg1: res.dataImg1,
            dataImg2: res.dataImg2,
            dataImg3: res.dataImg3
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
      getdata3()
        .then((res) => {
          this.setState({ homePage: res.homePage });
          this.setState({ dataImg1: res.dataImg1,
            dataImg2: res.dataImg2,
            dataImg3: res.dataImg3
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  
  render() {
    return (
      <>
        <Header
          getMsg={this.getChildMsg}
          homePage={this.state.homePage}
          dataImg1={this.state.dataImg1}
        />
        <Routes>
          <Route
            index
            element={
              <Home
                dataImg1={this.state.dataImg1}
                dataImg2={this.state.dataImg2}
                dataImg3={this.state.dataImg3}
                getMsg1={this.getChildMsg1}
                homePage={this.state.homePage}
              />
            }
          />
          {<Route path="hotel" element={<Hotel />} />}
        </Routes>
        <Footer homePage={this.state.homePage}/>
      </>
    );
  }
}
export default Layout;
