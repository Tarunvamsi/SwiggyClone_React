const RestaurantCategory = ({ categoryTitle }) => {
  console.log("menu items", categoryTitle);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
        <span>{categoryTitle}</span>
        <span>⏬</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
