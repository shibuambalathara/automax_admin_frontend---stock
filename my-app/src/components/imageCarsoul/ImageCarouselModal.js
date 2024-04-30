import { Dialog, Transition } from "@headlessui/react";
// import { XIcon } from "@heroicons/react/outline"/;
import { Fragment } from "react";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function ImageCarouselModal({ open, close, ...props }) {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={close}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-10" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={close}
                >
                  <span className="sr-only">Close</span>
                  {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}X
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  {props.title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {props.title}
                    </Dialog.Title>
                  )}

                  <div className="mt-8">
                    <Splide options={options}>
                      {props.images.map((image, index) => (
                        <SplideSlide key={`${index}slide`}>
                          <div className="w-full h-full object-cover">
                            <img
                              alt={`image${index}`}
                              src={image.src}
                              width={900}
                              height={500}
                            />
                          </div>
                        </SplideSlide>
                      ))}
                      {/* <SplideSlide>
                        <div className="w-full h-full object-cover">
                          <Image src={TheImage} alt="auto bse" />
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="w-full h-full object-cover">
                          <Image src={TheImage} alt="auto bse" />
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="w-full h-full object-cover">
                          <Image src={TheImage} alt="auto bse" />
                        </div>
                      </SplideSlide>
                      <SplideSlide>
                        <div className="w-full h-full object-cover">
                          <Image src={TheImage} alt="auto bse" />
                        </div>
                      </SplideSlide> */}
                    </Splide>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

ImageCarouselModal.defaultProps = {
  title: null,
};
