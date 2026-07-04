import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import ModifyActionWindow from "./ModifyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  openModifyWindow: (orderId, qty, price) => {},
  closeModifyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isModifyWindowOpen, setIsModifyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedOrderData, setSelectedOrderData] = useState({ orderId: "", qty: 1, price: 0, onSuccess: null });

  const handleOpenBuyWindow = (uid) => {
    setIsSellWindowOpen(false);
    setIsModifyWindowOpen(false);
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    if (props.onCloseWatchlist) props.onCloseWatchlist();
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setIsBuyWindowOpen(false);
    setIsModifyWindowOpen(false);
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    if (props.onCloseWatchlist) props.onCloseWatchlist();
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenModifyWindow = (orderId, qty, price, onSuccess) => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedOrderData({ orderId, qty, price, onSuccess });
    setIsModifyWindowOpen(true);
  };

  const handleCloseModifyWindow = () => {
    setIsModifyWindowOpen(false);
    setSelectedOrderData({ orderId: "", qty: 1, price: 0, onSuccess: null });
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openModifyWindow: handleOpenModifyWindow,
        closeModifyWindow: handleCloseModifyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
      {isModifyWindowOpen && (
        <ModifyActionWindow
          orderId={selectedOrderData.orderId}
          defaultQty={selectedOrderData.qty}
          defaultPrice={selectedOrderData.price}
          onSuccess={selectedOrderData.onSuccess}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
