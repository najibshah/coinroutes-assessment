//Incomplete function
//will be cleaned up and refactored after successfull connection

import { useEffect, useState } from "react";

export function useOrderBook(currencyPair) {
  const [orderBook, setOrderBook] = useState({ bids: [], offers: [] });

  useEffect(() => {
    const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "subscribe",
          channels: [{ name: "level2", product_ids: [currencyPair] }],
        })
      );
    };

    try {
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data, "yes");
        if (data.type === "snapshot" || data.type === "l2update") {
          setOrderBook({
            bids: data.bids || orderBook.bids,
            offers: data.asks || orderBook.offers,
          });
          console.log(data.bids, "data");
          console.log(orderBook.bids, "orderbook");
        } else if (data.type === "error") throw data.message + data.reason;
      };
    } catch (error) {
      console.log("error", error);
    }

    console.log({ orderBook });
    return () => orderBook;
  }, [currencyPair]);

  return orderBook;
}
