import { useState, useEffect } from "react";
import Modal from "react-modal";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG_ID } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Button from "./ui/Button";
import Toggle from "./ui/Toggle";
import RestaurantCategory from "./RestaurantCategory";
import MenuList from "./MenuList";
import AngleDownIcon from "./icons/AngleDownIcon";

// Set the app element for the modal (usually your root element)
Modal.setAppElement("#root");

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openAccordions, setOpenAccordions] = useState([]);

  if (resInfo === null) return <Shimmer />;

  const resNamePath = resInfo?.data?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card.card?.card?.itemCards || card.card?.card?.categories
    );

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const handleAccordion = (index) => {
    setOpenAccordions((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="m-1 p-1">
      <div className="container mx-auto my-8 p-4">
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h1 className="text-5xl font-extrabold text-center text-green-500 hover:text-orange-600 transition duration-300 ease-in-out transform hover:scale-105">
            {resNamePath.name}
          </h1>
          <p className="text-2xl font-bold text-center text-gray-600 mt-4">
            {resNamePath.cuisines.join(", ")} - {resNamePath.costForTwoMessage}
          </p>
        </div>
      </div>

      <div className="p-8 w-full flex flex-col shadow-xl rounded-lg">
        {categories.map((category, index) => {
          const categoryTitle = category.card.card.title;
          const menuItems =
            category.card.card.itemCards ||
            category.card.card.categories[0].itemCards;

          return (
            <div key={index} className="mb-5">
              <div
                className="flex justify-between m-4 cursor-pointer"
                onClick={() => handleAccordion(index)}
              >
                <span className="font-bold text-lg">
                  {categoryTitle} ({menuItems.length})
                </span>
                <AngleDownIcon></AngleDownIcon>
              </div>

              {openAccordions[index] && (
                <MenuList menuItems={menuItems} openModal={openModal} />
              )}
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
