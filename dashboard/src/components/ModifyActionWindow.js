import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const ModifyActionWindow = ({ orderId, defaultQty, defaultPrice, onSuccess }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(defaultQty);
  const [stockPrice, setStockPrice] = useState(defaultPrice);

  const handleModifyClick = () => {
    if (stockPrice < 1) return;

    axios.put(`http://localhost:3002/updateOrder/${orderId}`, {
      qty: stockQuantity,
      price: stockPrice,
    }).then(() => {
      if (onSuccess) onSuccess();
    });

    generalContext.closeModifyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeModifyWindow();
  };

  return (
    <div className="container" id="modify-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="1"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleModifyClick}>
            Modify
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyActionWindow;
