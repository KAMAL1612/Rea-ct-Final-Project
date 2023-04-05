import React, { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';



class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookingId:'',
        city:'',
        modeOfTravel: '',
        modeOfTravelPrice: '',
        hotels: '',
        hotelPrice: '',
        hotelRatings: ''
    };
  }

  handleBookingIdChange = (event) => {
    this.setState({ bookingId: event.target.value });
  };

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleModeOfTravelChange = (event) => {
    this.setState({ modeOfTravel: event.target.value });
  };

  handleModeOfTravelPriceChange = (event) => {
    this.setState({ modeOfTravelPrice: event.target.value });
  };

  handleHotelsChange = (event) => {
    this.setState({ hotels: event.target.value });
  };

  handleHotelPriceChange = (event) => {
    this.setState({ hotelPrice: event.target.value });
  };

  handleHotelRatingsChange = (event) => {
    this.setState({ hotelRatings: event.target.value });
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        bookingId: this.state.bookingId,
        city: this.state.city,
        modeOfTravel: this.state.modeOfTravel,
        modeOfTravelPrice: this.state.modeOfTravelPrice,
        hotels: this.state.hotels,
        hotelPrice: this.state.hotelPrice,
        hotelRatings: this.state.hotelRatings,
      };
    
     
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Booking Id</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.bookingId}
          onChange={this.handleBookingIdChange}
        />

        <label className="sign-label">City</label>
        <select value={this.state.city} onChange={this.handleCityChange}>
          <option value="">--Select--</option>
          <option value="option1">Coimbatore</option>
          <option value="option2">Chennai</option>
          <option value="option3">Erode</option>
          <option value="option3">Salem</option>
          <option value="option3">Pondicherry</option>
          <option value="option3">Karur</option>
          <option value="option3">Ooty</option>
          <option value="option3">Bangalore</option>
          <option value="option3">Trichy</option>
          <option value="option3">kanyakumari</option>
          <option value="option3">Thothukudi</option>
          <option value="option3">Theni</option>
          <option value="option3">Vilupuram</option>
          <option value="option3">Vellore</option>
          <option value="option3">Chengalpattu</option>
          <option value="option3">Kanchipuram</option>


          
        </select>

        <label className="sign-label">Mode of Travel</label>
        <select value={this.state.modeOfTravel} onChange={this.handleModeOfTravelChange}>
          <option value="">--Select--</option>
          <option value="Car">Walk</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Bike">Bus</option>
          <option value="Flight">Flight</option>
          <option value="Train">Train</option>
        </select>

        <label className="sign-label">Mode of Travel Price</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.modeOfTravelPrice}
          onChange={this.handleModeOfTravelPriceChange}
        />

        <label className="sign-label">Hotels</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.hotels}
          onChange={this.handleHotelsChange}
        />

        <label className="sign-label">Hotel Price</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.hotelPrice}
          onChange={this.handleHotelPriceChange}
        />

        <label className="sign-label">Hotel Ratings</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.hotelRatings}
          onChange={this.handleHotelRatingsChange}
        />
        
        <Link to="/Management">
          <button className="next1" type="submit">Add Details</button>
        </Link>

        
      </form>
    );
  }
}

export default Post; 