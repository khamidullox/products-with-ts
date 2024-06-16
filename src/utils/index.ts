import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://dummyjson.com/products",
});
export let formatPrice = (number: number) => {
  let newPeice = new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return newPeice;
};
