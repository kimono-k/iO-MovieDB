const Toggle = () => {
  return (
    <div className="flex flex-row-reverse">
      <button
        type="button"
        className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        role="switch"
        aria-checked="false"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        ></span>
      </button>
      <b>Favorite: </b>
    </div>
  );
};

export default Toggle;
