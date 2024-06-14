import { useState, useEffect } from "react";
import Modal from "react-modal";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG_ID } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Button from "./ui/Button";
import Toggle from "./ui/Toggle";

// Set the app element for the modal (usually your root element)
Modal.setAppElement("#root");

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const resNamePath = resInfo?.data?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card.card?.card?.itemCards || card.card?.card?.categories
    );
  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="m-1 p-1">
      <div class="container mx-auto my-8 p-4">
        <div class="bg-white shadow-xl rounded-lg p-6">
          <h1 class="text-5xl font-extrabold text-center text-green-500 hover:text-orange-600 transition duration-300 ease-in-out transform hover:scale-105">
            {resNamePath.name}
          </h1>
          <p class="text-2xl font-bold text-center text-gray-600 mt-4">
            {resNamePath.cuisines.join(", ")} - {resNamePath.costForTwoMessage}
          </p>
        </div>
      </div>

      <div className=" p-8 w-full flex flex-col shadow-xl rounded-lg">
        {categories.map((category, index) => {
          const categoryTitle = category.card.card.title;
          const menuItems =
            category.card.card.itemCards ||
            category.card.card.categories[0].itemCards;

          return (
            <div key={index} className="mb-5">
              <h3 className="mb-2 text-xl font-bold">{categoryTitle}</h3>
              <div className="flex flex-wrap ">
                {menuItems.map((item) => (
                  <div
                    className="p-4 m-1 flex flex-col gap-2 w-[280px] bg-orange-200 rounded-md shadow-xl justify-between"
                    key={item.card.info.id}
                  >
                    <img
                      className=" rounded-md h-52"
                      alt="image"
                      src={MENU_IMG_ID + item.card.info.imageId}
                    />
                    <div className="font-bold text-lg">
                      <span className="inline-flex items-center">
                        {item.card.info.itemAttribute.vegClassifier ===
                        "VEG" ? (
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
                      Rs{" "}
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}{" "}
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
                        name="Add to cart"
                        handleClick={() => openModal(item.card.info)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {selectedItem && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Item Description"
          className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50"
          overlayClassName="overlay"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-lg mx-auto">
            <img
              className="rounded-md h-52 mx-auto"
              alt="image"
              src={MENU_IMG_ID + selectedItem.imageId}
            />
            <h2 className="font-bold text-2xl mt-2 text-center">
              {selectedItem.name}
            </h2>
            <p className="font-medium text-center mt-2">
              Rs {selectedItem.price / 100 || selectedItem.defaultPrice / 100} -
              ⭐{selectedItem.ratings.aggregatedRating.rating} (
              {selectedItem.ratings.aggregatedRating.ratingCount})
            </p>
            <p className="menudesc mt-2 text-center">
              {selectedItem.description}
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RestaurantMenu;
