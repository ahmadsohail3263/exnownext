const Input = (props) => {
  const title = props.title;

  return (
    <div className="relative z-0 w-full mb-6 group">
      <label className={`block text-sm font-medium text-gray-700`}>
        {title}
      </label>
      <input
        {...props}
        className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C7B63] focus:border-[#2C7B63] sm:text-sm`}
      />
    </div>
  );
};
export default Input;
