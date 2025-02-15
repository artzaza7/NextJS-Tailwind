import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <section className="text-white bg-black py-1">
        <div className="container text-center relative">
          <p>Sign up and get 20% off to your first order. Sign Up Now</p>
          <button type="button" className="absolute top-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
              />
            </svg>
          </button>
        </div>
      </section>
      <Navbar />
    </>
  );
}
