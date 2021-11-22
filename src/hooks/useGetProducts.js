import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  /* useEffect(async () => {
    const response = await axios(API);

    setProducts(response.data);
  }, []); */

  useEffect(async () => {
    try {
      const response = await axios.get(API);
      setProducts(response.data);
    } catch (error) {
      console.log(`Entre en el catch, error al consumir servicio ${error}`);
    }
  }, []);

  return products;
};

export default useGetProducts;
