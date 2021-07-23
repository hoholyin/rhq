import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";
export default class App extends React.Component {
    //other logic
    render() {
        return (
            <Loader type="Bars" color="#04AA6D" height={30} width={200} />
        );
    }
}
