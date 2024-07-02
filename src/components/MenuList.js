import React from "react";
import Button from "./ui/Button";
import { MENU_IMG_ID } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../../utils/cartSlice";

const MenuList = ({ menuItems, openModal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.card.info.id === item.card.info.id);
    if (existingItem) {
      dispatch(updateQuantity({ itemId: item.card.info.id, quantity: 1 }));
    } else {
      dispatch(addItem(item));
    }
  };

  const handleRemoveItem = (itemId) => {
    const existingItem = cartItems.find((cartItem) => cartItem.card.info.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      dispatch(updateQuantity({ itemId, quantity: -1 }));
    } else {
      dispatch(removeItem({ itemId }));
    }
  };

  return (
    <div className="flex flex-wrap">
      {menuItems.map((item) => {
        const cartItem = cartItems.find((cartItem) => cartItem.card.info.id === item.card.info.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div
            className="p-4 m-1 flex flex-col gap-2 w-[280px] bg-orange-200 rounded-md shadow-xl justify-between"
            key={item.card.info.id}
          >
            <img
              className="rounded-md h-52"
              alt="image"
              src={MENU_IMG_ID + item.card.info.imageId}
            />
            <div className="font-bold text-lg">
              <span className="inline-flex items-center">
                {item.card.info.itemAttribute.vegClassifier === "VEG" ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/480px-Indian-vegetarian-mark.svg.png"
                    alt="Veg"
                    className="ml-2 w-4 h-4"
                  />
                ) : (
                  <img
                    src="https://cdn.vectorstock.com/i/500p/00/43/non-vegetarian-sign-veg-logo-symbol-vector-50890043.jpg"
                    alt="Non-Veg"
                    className="ml-2 w-4 h-4"
                  />
                )}
              </span>{" "}
              {item.card.info.name}
            </div>
            <div className="font-medium">
              Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
              - ⭐{item.card.info.ratings.aggregatedRating.rating} (
              {item.card.info.ratings.aggregatedRating.ratingCount})
            </div>
            <div className="flex gap-4 bottom-0">
              <Button
                variant="PRIMARY"
                name="More Details"
                handleClick={() => openModal(item.card.info)}
              />
              <div className="flex gap-2">
                <Button
                  variant="SECONDARY"
                  name="-"
                  handleClick={() => handleRemoveItem(item.card.info.id)}
                />
                <span>{quantity}</span>
                <Button
                  variant="SECONDARY"
                  name="+"
                  handleClick={() => handleAddItem(item)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
