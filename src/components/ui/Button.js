function Button(props) {
  const bgColor = props.variant === "PRIMARY" ? "bg-orange-400" : "bg-blue-700";
  const hoverBgColor =
    props.variant === "PRIMARY" ? "bg-orange-500" : "bg-blue-800";
  const focusRingColor =
    props.variant === "PRIMARY" ? "ring-orange-300" : "ring-blue-300";
  return (
    <button
      type="button"
      className={`p-2  text-xs font-medium text-center text-white ${bgColor} rounded-lg hover:${hoverBgColor} focus:ring-4 focus:outline-none focus:${focusRingColor}   `}
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
}

export default Button;
