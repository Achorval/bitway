import React from "react";
import { connect } from "react-redux";
import TradeCoin from "components/home/TradeCoin";
import RecentTransactions from "./RecentTransactions";
import WalletBalance from "components/home/WalletBalance";

const Home = props => {
  
  return (
    <div>
      <div className="container p-0">
        <div className="row ma-0">
          <div className="col-12 col-xl-8 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <p className="text-muted text-uppercase mb-1">Welcome back,</p>
            <h3 className="mb-2 fs-27 bold-text text-left">
              {props.userData && `${props.userData.firstname} ${props.userData.lastname}`}
            </h3>
          </div>
        </div>
        <div className="row ma-0">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 pb-15">
            <WalletBalance />
          </div>
        </div>

        <TradeCoin {...props} />

        <div className="row ma-0">
          <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 ptb-15">
            <RecentTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state.auth,
    ...state.themeChanger
  };
};

export default connect(mapStateToProps, null)(Home);
