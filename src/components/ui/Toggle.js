const Toggle = () => {
  return (
    <div>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Vegetarian
        </span>
      </label>
    </div>
  );
};

export default Toggle;
