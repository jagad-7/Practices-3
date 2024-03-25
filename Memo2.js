import React, { useEffect, useMemo, useState } from "react";
import './Memo2.css'
export default function Memo2() {
  const [Time, setTime] = useState(new Date().toLocaleTimeString());
  const [products, setProducts] = useState([
    { id: 1, name: "Samsung s22 Ultra", price: 130000 },
    { id: 2, name: "OnePlus Nord z", price: 100000 },
    { id: 3, name: "Oppo reno", price: 90000 },
  ]);

  const [searchText, setSearchText] = useState("");

  const filteredProducts = useMemo(
    () => {
      return products.filter((p) => {
        return p.name.toLowerCase().includes(searchText.toLocaleLowerCase())
      })
    },[products, searchText])
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{Time}</h1>
      <input type="text" placeholder="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
      <table>
        <tr className="head">
          <td>S.No</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
        {filteredProducts.map((p) => (
          <tr>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
