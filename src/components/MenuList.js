import React from "react";
import Button from "./ui/Button";
import { MENU_IMG_ID } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";

const MenuList = ({ menuItems, openModal }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an Action
    dispatch(addItem(item)); // pizza here is action.payload
  };

  const handleremoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex flex-wrap">
      {menuItems.map((item) => (
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
                  src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
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
            <Button
              variant="SECONDARY"
              name="Add"
              handleClick={() => handleAddItem(item)}
            ></Button>
            <Button
              variant="SECONDARY"
              name="Remove"
              handleClick={() => handleremoveItem(item)}
            ></Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
