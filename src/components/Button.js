const Button = (props) => {
  return (
    <button
      {...props}
      className="text-white bg-[#2C7B63] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-4"
    >
      {props.label}
    </button>
  );
};
export default Button;
