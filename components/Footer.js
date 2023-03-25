import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white mx-auto p-8 bottom-0" id="contact">
      <div className="w-full mx-auto flex flex-wrap gap-8 lg:gap-0">
        <div className="flex w-full lg:w-1/2">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-900 lg:text-xl">Get in touch</h3>
            <ul className="list-reset items-center pt-4">
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-1"
                  href="mailto:srijan.bcas2023@gmail.com"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.54433 5.16792C3.0468 4.46923 3.86451 4 4.8 4H19.2C20.1355 4 20.9532 4.46923 21.4557 5.16792C21.7993 5.64567 22 6.235 22 6.86667V17.1333C22 18.682 20.7804 20 19.2 20H4.8C3.21964 20 2 18.682 2 17.1333V6.86667C2 6.23499 2.20074 5.64567 2.54433 5.16792ZM4.9327 6L11.2598 12.9647C11.6566 13.4015 12.3434 13.4015 12.7402 12.9647L19.0673 6H4.9327ZM20 7.94766L14.2205 14.3096C13.0301 15.6199 10.9699 15.6199 9.77948 14.3096L4 7.94766V17.1333C4 17.6466 4.39214 18 4.8 18H19.2C19.6079 18 20 17.6466 20 17.1333V7.94766Z"
                      fill="#000000"
                    />
                  </svg>
                  <span className="pl-2">srijan.bcas2023@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-1"
                  href="https://www.instagram.com/srijanbcas"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                    fill="#000000"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 32 32"
                  >
                    <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
                    <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
                  </svg>
                  <span className="pl-2">Srijan</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-block no-underline hover:text-black hover:underline py-1"
                  href="tel:+916307970160"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.20711 14.7929C11.5251 17.111 13.6781 18.4033 15.2802 19.121C16.6787 19.7475 18.3296 19.2562 19.6167 17.9691L19.9114 17.6744L16.3752 15.4241C15.7026 16.4048 14.4319 16.979 13.1632 16.4434C12.2017 16.0376 10.9302 15.3445 9.7929 14.2071C8.65557 13.0698 7.96243 11.7983 7.55659 10.8369C7.02105 9.56817 7.59528 8.29741 8.57591 7.62479L6.32562 4.08863L6.0309 4.38335C4.74381 5.67044 4.25256 7.32131 4.87905 8.71986C5.59671 10.322 6.88908 12.4749 9.20711 14.7929ZM14.4626 20.9462C12.6479 20.1334 10.2905 18.7047 7.7929 16.2071C5.29532 13.7096 3.86668 11.3521 3.05381 9.53748C1.9781 7.13609 2.95955 4.62627 4.61669 2.96913L4.91141 2.67441C5.81615 1.76967 7.32602 1.93541 8.01294 3.01488L10.8437 7.46315C10.9957 7.70201 11.0393 7.99411 10.9637 8.26696C10.8881 8.53981 10.7005 8.76784 10.4472 8.89446L9.81354 9.2113C9.38171 9.42721 9.2931 9.80786 9.39916 10.0591C9.73804 10.8619 10.3046 11.8904 11.2071 12.7929C12.1097 13.6955 13.1381 14.262 13.9409 14.6009C14.1922 14.7069 14.5728 14.6183 14.7887 14.1865L15.1056 13.5528C15.2322 13.2996 15.4602 13.1119 15.7331 13.0363C16.0059 12.9607 16.298 13.0044 16.5369 13.1564L20.9852 15.9871C22.0646 16.674 22.2304 18.1839 21.3256 19.0886L21.0309 19.3833C19.3738 21.0405 16.8639 22.0219 14.4626 20.9462Z"
                      fill="#000000"
                    />
                  </svg>
                  <span className="pl-2">+91 6307970160</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <div className="px-3 md:px-0">
            <h3 className="font-bold text-gray-900 lg:text-xl">Find Us</h3>
            <div className="pt-4">
              <a
                className="inline-block no-underline hover:text-black hover:underline py-1"
                href="https://goo.gl/maps/x56XDLsdkcVP2KC38"
                target="_blank"
              >
                <div className="inline">
                  <svg
                    className="inline"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 8.4666669 8.4666669"
                  >
                    <defs id="defs2" />
                    <g id="layer1" transform="translate(0,-288.53332)">
                      <path
                        d="m 4.2324219,288.79688 c -1.6042437,0 -2.9101556,1.30591 -2.9101563,2.91015 -10e-7,2.82277 2.7460938,4.96875 2.7460938,4.96875 a 0.26460978,0.26460978 0 0 0 0.3300781,0 c 0,0 2.7460996,-2.14598 2.7460937,-4.96875 -3.4e-6,-1.60424 -1.3078657,-2.91015 -2.9121093,-2.91015 z m 0,0.52929 c 1.3182605,0 2.3828097,1.0626 2.3828125,2.38086 4.8e-6,2.30926 -2.0910618,4.13374 -2.3808594,4.38086 -0.2884142,-0.24588 -2.3828134,-2.0707 -2.3828125,-4.38086 5e-7,-1.31826 1.0625988,-2.38086 2.3808594,-2.38086 z"
                        id="path929"
                      />
                      <path
                        d="m 4.2324219,290.38477 c -0.7274912,0 -1.3222633,0.59477 -1.3222657,1.32226 -4.5e-6,0.7275 0.5947697,1.32422 1.3222657,1.32422 0.727496,0 1.3242233,-0.59672 1.3242187,-1.32422 -2.3e-6,-0.72749 -0.5967275,-1.32226 -1.3242187,-1.32226 z m 0,0.52929 c 0.4415089,0 0.7949204,0.35146 0.7949219,0.79297 2.7e-6,0.44151 -0.35341,0.79492 -0.7949219,0.79492 -0.441512,0 -0.7929715,-0.35341 -0.7929688,-0.79492 1.4e-6,-0.44151 0.3514598,-0.79297 0.7929688,-0.79297 z"
                        id="circle931"
                      />
                    </g>
                  </svg>
                </div>
                <p>
                  Bhaskaracharya College of Applied Sciences (University of
                  Delhi)
                  <br />
                  Sector 2, Phase 1, Dwarka,
                  <br />
                  New Delhi-110075, India
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
