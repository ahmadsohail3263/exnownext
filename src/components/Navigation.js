import Link from "next/link";

const Navigation = (props) => {
  return (
    <>
      <Link
        href={props.link}
        className="inline-block  text-white bg-[#2C7B63] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center mt-4"
      >
        {props.label}
      </Link>
    </>
  );
};

export default Navigation;
