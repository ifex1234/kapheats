import React from "react";
import "../styles/MenuItem.scss";
type Props = {
  title: string;
  price: string;
  tags: string;
};
const MenuItems = ({ title, price, tags }: Props) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant text-[#DCCA87]">{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans text-[#AAAAAA]">{tags}</p>
    </div>
  </div>
);

export default MenuItems;
