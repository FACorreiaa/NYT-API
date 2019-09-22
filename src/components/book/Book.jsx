import React from "react";
import axios from "axios";
import "./Book.css";

function BookComponent() {
  const [data, setData] = React.useState(null);

  async function fetchMyAPI() {
    try {
      /* const result = await axios.get(
        "api.airvisual.com/v2/countries?key=7f81cf3e-e68f-48ee-9ddf-464893f8b1b9"
      );
      let data = await result.data;
      console.log(data); */
      let response = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=eqtc7kPU1ZfrTgX2F6thiHH8fvAjh8Ab"
      );
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }

  React.useEffect(() => {
    fetchMyAPI();
  }, []);

  return <div>Name: {!setData ? "Loading..." : `${setData}`}</div>;
}

export default BookComponent;
