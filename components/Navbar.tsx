"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-start items-start h-[755px] ">
      <div className="w-[51px] flex flex-col justify-between items-center pb-2 h-full">
        <div className="w-full flex flex-col justify-start items-center">
          <div className="flex w-[50px] justify-center items-center gap-[10px] py-1.5 px-3.5 opacity-100">
            <div className="flex justify-center items-center size-[40px] p-4 rounded-lg">
              <div className="">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 16.25H17.5V10.625L17.6828 10.8078C17.8003 10.9251 17.9596 10.9909 18.1256 10.9908C18.2916 10.9906 18.4507 10.9245 18.568 10.8071C18.6852 10.6896 18.751 10.5303 18.7509 10.3643C18.7508 10.1983 18.6847 10.0392 18.5672 9.92189L10.8836 2.24064C10.6492 2.0064 10.3314 1.87482 10 1.87482C9.66862 1.87482 9.3508 2.0064 9.11641 2.24064L1.43281 9.92189C1.31564 10.0392 1.24986 10.1982 1.24993 10.364C1.25 10.5297 1.31593 10.6887 1.4332 10.8059C1.55048 10.923 1.7095 10.9888 1.87528 10.9888C2.04106 10.9887 2.20002 10.9228 2.31719 10.8055L2.5 10.625V16.25H1.25C1.08424 16.25 0.925268 16.3159 0.808058 16.4331C0.690848 16.5503 0.625 16.7093 0.625 16.875C0.625 17.0408 0.690848 17.1997 0.808058 17.317C0.925268 17.4342 1.08424 17.5 1.25 17.5H18.75C18.9158 17.5 19.0747 17.4342 19.1919 17.317C19.3092 17.1997 19.375 17.0408 19.375 16.875C19.375 16.7093 19.3092 16.5503 19.1919 16.4331C19.0747 16.3159 18.9158 16.25 18.75 16.25ZM3.75 9.37502L10 3.12502L16.25 9.37502V16.25H12.5V11.875C12.5 11.7093 12.4342 11.5503 12.3169 11.4331C12.1997 11.3159 12.0408 11.25 11.875 11.25H8.125C7.95924 11.25 7.80027 11.3159 7.68306 11.4331C7.56585 11.5503 7.5 11.7093 7.5 11.875V16.25H3.75V9.37502ZM11.25 16.25H8.75V12.5H11.25V16.25Z"
                    fill="#7E8986"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex w-[50px] justify-center items-center gap-[10px] py-1.5 px-3.5 opacity-100">
            <div className="flex justify-center items-center size-[40px] p-4 rounded-lg border border-[#DFDFDF] bg-[#F8F8F8]">
              <div className="">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 3.125H10.625V1.875C10.625 1.70924 10.5592 1.55027 10.4419 1.43306C10.3247 1.31585 10.1658 1.25 10 1.25C9.83424 1.25 9.67527 1.31585 9.55806 1.43306C9.44085 1.55027 9.375 1.70924 9.375 1.875V3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V13.75C1.875 14.0815 2.0067 14.3995 2.24112 14.6339C2.47554 14.8683 2.79348 15 3.125 15H6.2L4.51172 17.1094C4.40812 17.2389 4.36021 17.4042 4.37852 17.5691C4.39683 17.7339 4.47987 17.8847 4.60938 17.9883C4.73888 18.0919 4.90423 18.1398 5.06905 18.1215C5.23388 18.1032 5.38468 18.0201 5.48828 17.8906L7.8 15H12.2L14.5117 17.8906C14.563 17.9547 14.6264 18.0081 14.6984 18.0477C14.7703 18.0874 14.8493 18.1124 14.9309 18.1215C15.0126 18.1306 15.0952 18.1235 15.174 18.1006C15.2529 18.0777 15.3265 18.0396 15.3906 17.9883C15.4547 17.937 15.5081 17.8736 15.5477 17.8016C15.5874 17.7297 15.6124 17.6507 15.6215 17.5691C15.6305 17.4874 15.6235 17.4048 15.6006 17.326C15.5777 17.2471 15.5396 17.1735 15.4883 17.1094L13.8 15H16.875C17.2065 15 17.5245 14.8683 17.7589 14.6339C17.9933 14.3995 18.125 14.0815 18.125 13.75V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM16.875 13.75H3.125V4.375H16.875V13.75ZM8.125 9.375V11.25C8.125 11.4158 8.05915 11.5747 7.94194 11.6919C7.82473 11.8092 7.66576 11.875 7.5 11.875C7.33424 11.875 7.17527 11.8092 7.05806 11.6919C6.94085 11.5747 6.875 11.4158 6.875 11.25V9.375C6.875 9.20924 6.94085 9.05027 7.05806 8.93306C7.17527 8.81585 7.33424 8.75 7.5 8.75C7.66576 8.75 7.82473 8.81585 7.94194 8.93306C8.05915 9.05027 8.125 9.20924 8.125 9.375ZM10.625 8.125V11.25C10.625 11.4158 10.5592 11.5747 10.4419 11.6919C10.3247 11.8092 10.1658 11.875 10 11.875C9.83424 11.875 9.67527 11.8092 9.55806 11.6919C9.44085 11.5747 9.375 11.4158 9.375 11.25V8.125C9.375 7.95924 9.44085 7.80027 9.55806 7.68306C9.67527 7.56585 9.83424 7.5 10 7.5C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125ZM13.125 6.875V11.25C13.125 11.4158 13.0592 11.5747 12.9419 11.6919C12.8247 11.8092 12.6658 11.875 12.5 11.875C12.3342 11.875 12.1753 11.8092 12.0581 11.6919C11.9408 11.5747 11.875 11.4158 11.875 11.25V6.875C11.875 6.70924 11.9408 6.55027 12.0581 6.43306C12.1753 6.31585 12.3342 6.25 12.5 6.25C12.6658 6.25 12.8247 6.31585 12.9419 6.43306C13.0592 6.55027 13.125 6.70924 13.125 6.875Z"
                    fill="#7E8986"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex w-[50px] justify-center items-center gap-[10px] py-1.5 px-3.5 opacity-100">
            <div className="flex justify-center items-center size-[40px] p-4 rounded-lg">
              <div className="">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.25 2.5H6.25C5.91848 2.5 5.60054 2.6317 5.36612 2.86612C5.1317 3.10054 5 3.41848 5 3.75V5H3.75C3.41848 5 3.10054 5.1317 2.86612 5.36612C2.6317 5.60054 2.5 5.91848 2.5 6.25V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H13.75C14.0815 17.5 14.3995 17.3683 14.6339 17.1339C14.8683 16.8995 15 16.5815 15 16.25V15H16.25C16.5815 15 16.8995 14.8683 17.1339 14.6339C17.3683 14.3995 17.5 14.0815 17.5 13.75V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM6.25 3.75H16.25V9.17031L14.9453 7.86562C14.7109 7.63138 14.3931 7.4998 14.0617 7.4998C13.7303 7.4998 13.4125 7.63138 13.1781 7.86562L7.29453 13.75H6.25V3.75ZM13.75 16.25H3.75V6.25H5V13.75C5 14.0815 5.1317 14.3995 5.36612 14.6339C5.60054 14.8683 5.91848 15 6.25 15H13.75V16.25ZM16.25 13.75H9.0625L14.0625 8.75L16.25 10.9375V13.75ZM9.375 8.75C9.74584 8.75 10.1084 8.64003 10.4167 8.43401C10.725 8.22798 10.9654 7.93514 11.1073 7.59253C11.2492 7.24992 11.2863 6.87292 11.214 6.50921C11.1416 6.14549 10.963 5.8114 10.7008 5.54917C10.4386 5.28695 10.1045 5.10837 9.74079 5.03603C9.37708 4.96368 9.00008 5.00081 8.65747 5.14273C8.31486 5.28464 8.02202 5.52496 7.81599 5.83331C7.60997 6.14165 7.5 6.50416 7.5 6.875C7.5 7.37228 7.69754 7.84919 8.04917 8.20083C8.40081 8.55246 8.87772 8.75 9.375 8.75ZM9.375 6.25C9.49861 6.25 9.61945 6.28666 9.72223 6.35533C9.82501 6.42401 9.90512 6.52162 9.95243 6.63582C9.99973 6.75003 10.0121 6.87569 9.98799 6.99693C9.96388 7.11817 9.90435 7.22953 9.81694 7.31694C9.72953 7.40435 9.61817 7.46388 9.49693 7.48799C9.37569 7.51211 9.25003 7.49973 9.13582 7.45243C9.02162 7.40512 8.92401 7.32501 8.85533 7.22223C8.78666 7.11945 8.75 6.99861 8.75 6.875C8.75 6.70924 8.81585 6.55027 8.93306 6.43306C9.05027 6.31585 9.20924 6.25 9.375 6.25Z"
                    fill="#7E8986"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-[18px]">
          <div className="flex justify-center items-center size-[20px] rounded-lg">
            <div className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5095_2808)">
                  <path
                    d="M14.6654 17.5V15.8333C14.6654 14.9493 14.3142 14.1014 13.6891 13.4763C13.0639 12.8512 12.2161 12.5 11.332 12.5H4.66536C3.78131 12.5 2.93346 12.8512 2.30834 13.4763C1.68322 14.1014 1.33203 14.9493 1.33203 15.8333V17.5"
                    stroke="#7E8986"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.0013 9.16667C9.84225 9.16667 11.3346 7.67428 11.3346 5.83333C11.3346 3.99238 9.84225 2.5 8.0013 2.5C6.16035 2.5 4.66797 3.99238 4.66797 5.83333C4.66797 7.67428 6.16035 9.16667 8.0013 9.16667Z"
                    stroke="#7E8986"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.668 17.501V15.8344C19.6674 15.0958 19.4216 14.3784 18.9691 13.7946C18.5166 13.2109 17.8831 12.794 17.168 12.6094"
                    stroke="#7E8986"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.832 2.60938C14.549 2.79296 15.1846 3.20996 15.6384 3.79463C16.0922 4.37931 16.3386 5.0984 16.3386 5.83854C16.3386 6.57868 16.0922 7.29778 15.6384 7.88245C15.1846 8.46712 14.549 8.88412 13.832 9.06771"
                    stroke="#7E8986"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5095_2808">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex justify-center items-center size-[28px] rounded-4xl border border-white/10  bg-[#AB40FF] p-1.5">
            <p className="font-semibold text-center text-[12px] text-white">
              SS
            </p>
          </div>
          <div className="flex size-[40px] flex-col">
            <Image
              className="w-full object-cover border-2 border-[#139C53] rounded-xl"
              src={"/image_bottom.png"}
              alt="bottom"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      <div className="w-[237px] h-full flex flex-col justify-between py-6 px-4 bg-[#F8F8F8]">
        <div className="flex flex-col h-[703px] justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between py-2 px-3 cursor-pointer hover:bg-[#DFEAE8] rounded">
              <div className="flex gap-3 items-center">
                <Image
                  src="/meta.svg"
                  alt="Meta Ads"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <p className="font-medium text-sm text-[#031B15] leading-5">
                  Meta Ads
                </p>
              </div>
              <div className="flex justify-center items-center">
                <ChevronDown className="size-3.5 text-[#031B15]" />
              </div>
            </div>

            {/* Meta Ads sub section */}
            <div className="flex">
              <div className="flex px-[20px]">
                <div className="w-[1px] bg-[#031B15] opacity-20"></div>
              </div>
              <div className="flex gap-1 ">
                <div className="flex rounded-[10px] gap-3 py-1.5 px-4">
                  <p className="text-sm text-[#031B15] font-normal leading-5 opacity-60 cursor-pointer hover:opacity-100">
                    Sub section
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-2 px-3 cursor-pointer hover:bg-[#DFEAE8] rounded">
              <div className="flex gap-3 items-center">
                <Image
                  src="/ads.svg"
                  alt="Google Ads"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <p className="font-medium text-sm text-[#031B15] leading-5">
                  Google Ads
                </p>
              </div>
              <div className="flex justify-center items-center">
                <ChevronDown className="size-3.5 text-[#031B15]" />
              </div>
            </div>

            {/* Meta Ads sub section */}
            <div className="flex">
              <div className="flex px-[20px]">
                <div className="w-[1px] bg-[#031B15] opacity-20"></div>
              </div>
              <div className="flex flex-col gap-1 ">
                <div className="flex rounded-[10px] gap-3 py-1.5 px-4">
                  <p className="text-sm text-[#031B15] font-normal leading-5 opacity-60 cursor-pointer hover:opacity-100">
                    Sub section
                  </p>
                </div>
                <div className="flex rounded-[10px] gap-3 py-1.5 px-4">
                  <p className="text-sm text-[#031B15] font-normal leading-5 opacity-60 cursor-pointer hover:opacity-100">
                    Sub section
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between py-2 px-3 cursor-pointer hover:bg-[#DFEAE8] rounded">
              <div className="flex gap-3 items-center">
                <Image
                  src="/black.svg"
                  alt="Quick Commerce"
                  width={16}
                  height={16}
                  className="size-4"
                />
                <p className="font-medium text-sm text-[#031B15] leading-5">
                  Quick Commerce
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between py-2 px-3 cursor-pointer hover:bg-[#DFEAE8] rounded">
              <div className="flex gap-3 items-center">
                <Image
                  src="/help.svg"
                  alt="help"
                  width={20}
                  height={20}
                  className="size-5"
                />
                <p className="font-medium text-sm text-[#031B15]/80 leading-5">
                  Help
                </p>
              </div>
            </div>
            <div className="flex justify-between py-2 px-3 cursor-pointer hover:bg-[#DFEAE8] rounded">
              <div className="flex gap-3 items-center">
                <Image
                  src="/Settings.svg"
                  alt="settings"
                  width={20}
                  height={20}
                  className="size-5"
                />
                <p className="font-medium text-sm text-[#031B15] leading-5">
                  Settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
