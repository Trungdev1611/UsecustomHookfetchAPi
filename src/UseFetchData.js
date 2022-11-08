import axios from "axios";
import { useEffect, useState } from "react";

const UseFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        let res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        console.log("err", error);
      }
      setLoading(false);
    }
    setTimeout(() => {
      getData();
    }, 2000);
  }, [url]);
  return { data, loading };
};
export default UseFetchData;
