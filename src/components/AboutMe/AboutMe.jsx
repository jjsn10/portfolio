import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <section className="lg:grid grid-cols-8 gap-2">
        <div className="col-span-4 p-8">
          <h1 className="font-bold text-2xl py-8 px-8">
            I am Jared. I live in Lehi Utah, Where I develop the future.
          </h1>
          <p className="py-4 px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Curabitur gravida arcu ac tortor. Rutrum quisque non tellus orci ac auctor. Mauris sit
            amet massa vitae tortor. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Non diam
            phasellus vestibulum lorem sed. Lorem sed risus ultricies tristique nulla. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque.
          </p>
          <p className="py-4 px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Curabitur gravida arcu ac tortor. Rutrum quisque non tellus orci ac auctor. Mauris sit
            amet massa vitae tortor. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Non diam
            phasellus vestibulum lorem sed. Lorem sed risus ultricies tristique nulla. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque.
          </p>
          <p className="py-4 px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Curabitur gravida arcu ac tortor. Rutrum quisque non tellus orci ac auctor. Mauris sit
            amet massa vitae tortor. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Non diam
            phasellus vestibulum lorem sed. Lorem sed risus ultricies tristique nulla. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque.
          </p>
          <p className="py-4 px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Curabitur gravida arcu ac tortor. Rutrum quisque non tellus orci ac auctor. Mauris sit
            amet massa vitae tortor. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Non diam
            phasellus vestibulum lorem sed. Lorem sed risus ultricies tristique nulla. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque.
          </p>
        </div>
        <div className="col-span-4 p-8">
          <Image className="py-8 px-8 rounded" src="/About.jpg" width={500} height={500} alt="Picture of the author" />
          <ul className="px-8">
            <li className="flex items-center">
              <a
                class="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds LinkedIn"
                href=""
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
              <p className="px-4 py-4">Follow me on LinkedIn</p>
            </li>
            <li className="flex items-center">
              <a
                class="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds Instagram"
                href=""
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-6">
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <p className="px-4 py-4">Follow me on Instagram</p>
            </li>
            <li className="flex items-center">
              <a
                class="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds Twitter"
                href=""
                target="_blank"
              >
                <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <p className="px-4 py-4">Follow me on X</p>
            </li>
          </ul>
          <div className="flex items-center px-8 py-16">
             <a>
            <svg class="h-8 w-8 text-gray-700 hover:text-orange-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
            </a>
            <p className="px-4">jared.axl@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
