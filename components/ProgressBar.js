const ProgressBar = (props) => {
  const width = props.width;
  return (
    <>
      <div className="mr-6">
        <div>
          <p className="text-lg font-bold m-2">{props.title}</p>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-4 ">
          <div
            class="bg-blue-500 h-4 rounded-full"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
