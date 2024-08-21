
export default function Select(props) {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label className={`block text-sm font-medium text-gray-700`}>
       {props.label}
      </label>
      <select
        className={`w-full focus:ring-blue-500 focus:border-blue-500 bg-white border border-gray-300 rounded-md shadow-sm py-[6px] mt-1 text-gray-700 l focus:outline-none focus:ring-2 `}
        {...props}
        required
      >
        {props.data.map((data, index) => (
          <option key={index} value={data.id}>
            {Boolean(data.value) ? 'True' : 'False'}
          </option>
        ))}
      </select>
    </div>
  );
}
