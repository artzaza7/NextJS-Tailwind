// Inside component
const NumberAndText = ({
  number,
  label,
}: {
  number: string;
  label: string;
}) => {
  return (
    <div className=" flex flex-col">
      <p className="font-bold text-3xl">{number}+</p>
      <p className="text-lg">{label}</p>
    </div>
  );
};

const Advert = () => {
  return (
    <>
      <div className="py-5 ">
        <div className="container py-10 ">
          <div className="flex ">
            <div className="flex flex-col flex-1 justify-center">
              <div className="">
                <p className="font-extrabold text-7xl">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </p>
                <p className="py-7">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <a href="" className="">
                  <div className="bg-black flex w-64 justify-center py-4 text-white rounded-full">
                    Shop Now
                  </div>
                </a>
              </div>
              <div className="grid grid-cols-3 mt-12">
                <NumberAndText number="200" label="International Brands" />
                <NumberAndText number="2,000" label="High-Quality Products" />
                <NumberAndText number="30,000" label="Happy Customers" />
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <img src="https://placehold.co/700x750" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advert;
