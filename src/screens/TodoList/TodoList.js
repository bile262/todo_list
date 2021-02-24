/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Form from "../../components/UI/Form/Form";
import ListItem from "../../components/UI/ListItem/ListItem";
import Search from "../../components/UI/Search/Search";
import Title from "../../components/UI/Title/Title";
class TodoList extends Component {
  render() {
    return (
      <div className="container">
        <Title title={"Test"} />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button
              style={{ marginBottom: "10px" }}
              type="button"
              className="btn btn-info btn-block marginB10"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form />
          </div>
        </div>
        <ListItem />
      </div>
    );
  }
}

export default TodoList;
