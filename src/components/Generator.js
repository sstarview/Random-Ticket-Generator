import React, { Component } from "react";
import logo from "../tire.svg";
import "./Generator.css";

class Generator extends Component {
  render() {
    const {
      input,
      handleChange,
      handleClick,
      handleSubmit,
      inputDelete,
      inputCorrect,
      randomGenerator
    } = this.props;
    return (
      <div className="Generator-wrapper">
        <div className="Generator-left">
          <form onSubmit={handleSubmit}>
            <input
              maxLength="6"
              onChange={handleChange}
              type="text"
              placeholder="Enter 6 Digits"
              value={input}
            />
            <div className="Generator-buttons">
              <button name="7" onClick={handleClick}>
                7
              </button>
              <button name="8" onClick={handleClick}>
                8
              </button>
              <button name="9" onClick={handleClick}>
                9
              </button>
            </div>
            <div className="Generator-buttons">
              <button name="4" onClick={handleClick}>
                4
              </button>
              <button name="5" onClick={handleClick}>
                5
              </button>
              <button name="6" onClick={handleClick}>
                6
              </button>
            </div>
            <div className="Generator-buttons">
              <button name="1" onClick={handleClick}>
                1
              </button>
              <button name="2" onClick={handleClick}>
                2
              </button>
              <button name="3" onClick={handleClick}>
                3
              </button>
            </div>
            <div className="Generator-buttons">
              <button name="c" onClick={inputCorrect}>
                c
              </button>
              <button name="0" onClick={handleClick}>
                0
              </button>
              <button onClick={inputDelete}>d</button>
            </div>
            <button className="Generator-add" type="submit">
              Add Ticket
            </button>
          </form>
        </div>
        <div className="Generator-right">
          <h5>Click the wheel to generate random tickets</h5>
          <button onClick={randomGenerator}>
            <img src={logo} className="Generator-logo" alt="logo" />
          </button>
        </div>
      </div>
    );
  }
}

export default Generator;
