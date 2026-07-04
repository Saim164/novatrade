import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setallOrders] = useState([]);
  const generalContext = useContext(GeneralContext);

  const fetchOrders = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/allOrders`, { withCredentials: true }).then((res) => {
      setallOrders(res.data);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders">
      <div className={allOrders.length >= 1 ? "none" : "no-orders"}>
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
      <div className="got-orders">
        <>
          <h3 className="title"> ({allOrders.length})</h3>

          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>

              {allOrders.map((order, index) => {
                const name = order.name;
                const qty = order.qty;
                const price = order.price;
                const mode = order.mode;

                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{qty}</td>
                    <td>{price}</td>
                    <td>{mode}</td>
                    <td>
                      <button
                        className="update"
                        onClick={() =>
                          generalContext.openModifyWindow(
                            order._id,
                            qty,
                            price,
                            fetchOrders,
                          )
                        }
                      >
                        Modify
                      </button>

                      <button
                        className="delete"
                        onClick={() => {
                          axios
                            .delete(
                              `${process.env.REACT_APP_API_URL}/deleteOrder/${order._id}`,
                            )
                            .then(() => fetchOrders());
                        }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      </div>
    </div>
  );
};

export default Orders;
