import Navigation from "@/components/Navigation";
import about from "@/public/aboutus.png";
import Image from "next/image";
const page = () => {
  return (
    <section className="flex flex-grow justify-center items-center ">
      <div className="sm:grid sm:grid-cols-2 items-center max-w-[1400px]">
        <div className="p-2 md:p-10">
          <h2 className="text-2xl font-semibold pb-4"> About us</h2>
          <p className="font-normal text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Navigation label="Contact Us" link="/login" className="block" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={about.src} alt="about us" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default page;
