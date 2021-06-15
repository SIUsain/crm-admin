import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewSlider } from "../../actions/sliderAction";
import { bindActionCreators } from "redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export class SliderAdd extends Component {
  state = {
    Title: "",
    Url: "",
    ButtonText: "",
    Order: "",
    IsActive: false,
    IsDelete: false,
    ImageId: "",
    IsVideo: "",
    CreateAt: new Date(),
    SubTitle: "",
    UpdateAt: "",
    photo: {},
    submit: false,
  };

  getPhoto = (e) => {
    console.log(e.target.files[0]);
    this.setState({ photo: e.target.files[0] });
  };
  uploadPhoto = () => {
    const fd = new FormData();

    fd.append("image", this.state.photo, this.state.photo.name);
    axios
      .post(
        "https://api.imgbb.com/1/upload?expiration=600&key=a4a61c5615a8ba139a774ff21a6d5373",
        fd
      )
      .then((res) => {
        console.log(res.data.data.display_url);
        this.setState({ ImageId: res.data.data.display_url });
        console.log(this.state.ImageId);
      });
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ ...this.state, submit: true });
    this.props.addNewSlider(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div className="container bg-light border border-2 border-primary p-5 text-center">
        <form onChange={console.log(this.state)}>
          <h1 className="mx-auto"> ADD SLIDER FORM </h1>
          <div className="row d-flex flex-row m-2 pb-3">
            <div className="col-4 text-center d-flex flex-column">
              <label for="Title">Title:</label>
              <input
                required="required"
                type="text"
                id="Title"
                value={this.state.Title}
                onChange={(event) =>
                  this.setState({ ...this.state, Title: event.target.value })
                }
              ></input>
            </div>
            <div className="col-4 text-center d-flex flex-column">
              <label for="SubTitle">SubTitle:</label>
              <input
                required="required"
                type="text"
                id="SubTitle"
                value={this.state.SubTitle}
                onChange={(event) =>
                  this.setState({ ...this.state, SubTitle: event.target.value })
                }
              ></input>
            </div>
            <div className="col-4 text-center d-flex flex-column">
              <label for="Url">Url:</label>
              <input
                type="text"
                id="Url"
                value={this.Url}
                onChange={(event) =>
                  this.setState({ ...this.state, Url: event.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="row d-flex flex-row m-2">
            <div className="col-4 text-center d-flex flex-column">
              <label for="ButtonText">ButtonText:</label>
              <input
                required="required"
                type="text"
                id="ButtonText"
                value={this.ButtonText}
                onChange={(event) =>
                  this.setState({
                    ...this.state,
                    ButtonText: event.target.value,
                  })
                }
              ></input>
              <br />
            </div>
            <div className="col-4 text-center d-flex flex-column">
              <label for="Order">Order:</label>
              <input
                required="required"
                type="number"
                id="Order"
                value={this.Order}
                onChange={(event) =>
                  this.setState({ ...this.state, Order: event.target.value })
                }
              ></input>
            </div>
            <div className="col-4 text-center d-flex flex-column">
              <label for="ImageId">ImageId:( Add Slider Photo)</label>
              <input
                type="file"
                id="ImageId"
                // value={ImageId}
                onChange={(event) =>
                  this.setState({ ...this.state, ImageId: event.target.value })
                }
                onChange={(event) =>
                  this.setState(...this.state, { ImageId: event.target.value })
                }
                onChange={this.getPhoto}
              ></input>
              <button type="button" onClick={this.uploadPhoto}>
                Upload Photo
              </button>
            </div>
          </div>
          <div className="row d-flex flex-row m-2">
            <div className="col-4 text-center d-flex flex-column">
              <label for="IsActive">IsActive:</label>
              <select
              
                required="required"
                id="IsActive"
                onChange={(event) =>
                  this.setState({ ...this.state, IsActive: event.target.value })
                }
              >
              
                <option selected>Please Choose!</option>
                <option value="visible">visible</option>
                <option value="non-visible">non-visible</option>
              </select>
              <br />
            </div>
            <div className="col-4 text-center d-flex flex-column">
              <label for="IsVideo">IsVideo:</label>
              <select
                required="required"
                id="IsVideo"
                onChange={(event) =>
                  this.setState({ ...this.state, IsVideo: event.target.value })
                }
              >
                <option selected>Please Choose!</option>
                <option value="photo">photo</option>
                <option value="video">video</option>
              </select>{" "}
              <br />
            </div>
            <div className="col-4 text-center">
              <button
                as={Link}
                to={"/"}
                type="submit"
                className="btn btn-success mt-4"
                onClick={this.onSubmit}
              >
                {/* <Link to="/"></Link> */}
                Add Slider
              </button>
            </div>
          </div>
        </form>
        {this.state.submit ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({ sliderList }) => {
  return {
    state: sliderList,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addNewSlider }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SliderAdd);
