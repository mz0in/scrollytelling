"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";
import { gsap } from "gsap";

import s from "./hero.module.scss";
import { useRef } from "react";
import Link from "next/link";
import { LogoBasement } from "../../logos/logo";
import { Canvas } from "@react-three/fiber";
import { MacModel } from "./mac-model";
import { toVw } from "../../../lib/utils";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Scrollytelling.Root end="bottom bottom" defaults={{ ease: "linear" }}>
      <Scrollytelling.Pin
        childHeight={"100vh"}
        pinSpacerHeight={"300vh"}
        pinSpacerClassName={s["pin-spacer"]}
      >
        <header className={s["header"]}>
          <Link href="/">
            <LogoBasement className={s["logo"]} />
          </Link>

          <svg
            className={s["star"]}
            fill="none"
            viewBox="0 0 679 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                fill="#fff"
                d="M209.804 73.71a12.593 12.593 0 00-3.901-8.19 12.543 12.543 0 00-8.384-3.43L0 59.49l197.519-2.6c3.12-.058 6.107-1.278 8.378-3.422s3.664-5.06 3.907-8.177L211.568 22l1.829 24.084a12.587 12.587 0 003.642 7.938 12.546 12.546 0 007.923 3.649L249 59.503l-24.038 1.833a12.542 12.542 0 00-7.923 3.644 12.59 12.59 0 00-3.642 7.936L211.568 97l-1.764-23.29z"
              />
            </g>
            <g clipPath="url(#b)">
              <path
                fill="#fff"
                d="M469.196 45.29a12.593 12.593 0 003.901 8.19 12.543 12.543 0 008.384 3.43L679 59.51l-197.519 2.6c-3.12.058-6.107 1.278-8.378 3.422s-3.664 5.06-3.907 8.177L467.432 97l-1.829-24.084a12.587 12.587 0 00-3.642-7.938 12.546 12.546 0 00-7.923-3.649L430 59.497l24.038-1.833a12.542 12.542 0 007.923-3.644 12.59 12.59 0 003.642-7.936L467.432 22l1.764 23.29z"
              />
            </g>
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 100,
                to: {
                  transformOrigin: "50% 50%",
                  rotate: 360,
                },
              }}
            >
              <g>
                <circle cx="341" cy="60" r="60" fill="#FF4D00" />
                <path
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2.039"
                  d="M341.29 98.52c21.026-.037 37.957-17.284 37.818-38.52-.14-21.237-17.297-38.422-38.323-38.385-21.026.038-37.957 17.284-37.818 38.521.14 21.237 17.297 38.422 38.323 38.384z"
                />
                <path
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2.039"
                  d="M341.286 98.474c13.839-.026 24.946-17.242 24.808-38.454-.138-21.212-11.468-38.386-25.307-38.36-13.839.025-24.946 17.241-24.808 38.453.138 21.212 11.468 38.386 25.307 38.36z"
                />
                <path
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2.039"
                  d="M341.27 98.415c6.663-.015 11.961-17.196 11.832-38.375-.128-21.178-5.633-38.334-12.296-38.32-6.664.016-11.961 17.197-11.833 38.375.128 21.179 5.634 38.335 12.297 38.32z"
                />
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.039"
                  d="M303.01 59.792h76.039M305.98 45.534h70.099m-60.982-13.59l51.617-.219m-51.229 56.582h51.089M305.98 74.049h70.099"
                />
                <path
                  fill="#000"
                  d="M369.163 60.132c-22.982-.045-28.142 5.14-28.113 28.258-.029-23.135-5.197-28.346-28.162-28.39 22.982.044 28.142-5.142 28.113-28.259.029 23.117 5.197 28.328 28.162 28.39z"
                />
                <path
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2.039"
                  d="M340.864 21.806l.325 76.503"
                />
                <path
                  fill="#000"
                  d="M338.861 7.736c3.012-.112 3.794.48 3.886 2.972.092 2.493-.644 3.14-3.655 3.252-3.011.112-3.793-.48-3.886-2.973-.092-2.492.644-3.14 3.655-3.251zm-2.656 3.215c.08 2.16.367 2.381 2.86 2.29 2.493-.093 2.763-.336 2.683-2.496-.08-2.16-.367-2.382-2.86-2.29-2.493.093-2.763.335-2.683 2.495zm2.731-1.815c1.727-.064 2.178.183 2.216 1.22l.008.202-.922.026-.015-.209c-.042-.51-.16-.56-1.26-.519-1.177.044-1.305.141-1.273 1.016.033.875.168.963 1.345.92 1.099-.041 1.213-.1 1.225-.627l-.008-.201.921-.043.007.194c.039 1.053-.392 1.333-2.119 1.396-1.788.067-2.25-.257-2.299-1.605-.05-1.347.386-1.704 2.174-1.77zm12.32-.549c1.29.225 1.564.595 1.35 1.824-.151.862-.562 1.239-1.352 1.211.908.253 1.225.78 1.068 1.68-.217 1.245-.645 1.493-2.103 1.239l-4.656-.812 1.037-5.953 4.656.811zm-1.847 4.507c1 .174 1.125.133 1.21-.355.066-.374-.275-.63-1.016-.76l-1.946-.339-.194 1.115 1.946.339zm.25-2.426c.717.125 1.096.026 1.156-.318.081-.465-.016-.537-.978-.705l-1.778-.31-.178 1.023 1.778.31zm9.799 6.69l-1.882-.648.005-1.227-2.835-.977-.789.957-1.772-.611 4.35-4.893 2.563.884.36 6.516zm-1.943-3.349l-.165-2.327-.044-.015-1.578 1.726 1.787.616zm7.173 4.23c.156-.293-.123-.61-1.326-1.48-1.915-1.463-2.259-2.086-1.722-3.09.686-1.285 1.438-1.296 3.755-.058 2.337 1.248 2.71 1.948 1.878 3.506l-1.579-.843c.354-.663.265-.808-.945-1.454-1.189-.635-1.344-.657-1.538-.295-.164.308-.067.421 1.022 1.196 2.176 1.664 2.577 2.343 1.99 3.444-.65 1.216-1.398 1.203-3.763-.06-2.412-1.289-2.813-1.986-2.013-3.483l1.578.844c-.318.594-.217.735 1.04 1.407 1.278.683 1.436.715 1.623.366zm9.465 1.278l-.866 1.172-3.414-2.524-.498.673 3.172 2.344-.82 1.11-3.172-2.345-.543.735 3.427 2.533-.866 1.172-4.798-3.546 3.593-4.86 4.785 3.536zm-3.167 5.08l4.36-4.184 2.039 2.125-2.194 4.102.042.045 4.206-2.007 1.975 2.057-4.36 4.185-1.18-1.23 3.225-3.095-.032-.034-4.25 2.028-1.599-1.666 2.207-4.157-.033-.034-3.225 3.095-1.181-1.23zm14.644 8.343l-1.205.817-2.382-3.514-.692.469 2.212 3.264-1.142.774-2.212-3.264-.756.512 2.39 3.528-1.206.816-3.346-4.938 5.002-3.39 3.337 4.926zm.725 1.195l.604 1.266-1.584 4.925.02.042 3.203-1.526.733 1.539-5.456 2.599-.692-1.455 1.499-4.653-.021-.042-3.028 1.443-.733-1.54 5.455-2.598zm2.633 9.913l-.668-2.194 1.394-.424 1.837 6.04-1.393.425-.674-2.217-4.388 1.336-.496-1.631 4.388-1.335zm-1.381 6.992l-1.503.305-.368-1.815 1.504-.304.367 1.814zm.88 5.516c.331-.032.44-.44.498-1.924.157-2.405.485-3.036 1.618-3.146 1.45-.14 1.876.48 2.129 3.095.255 2.637-.121 3.335-1.879 3.505l-.172-1.781c.748-.073.818-.228.686-1.592-.13-1.342-.198-1.483-.607-1.443-.347.033-.387.177-.429 1.512-.179 2.734-.523 3.445-1.765 3.565-1.372.133-1.776-.498-2.034-3.166-.263-2.722.095-3.441 1.784-3.605l.172 1.781c-.671.065-.732.227-.596 1.646.14 1.441.201 1.591.595 1.553zm2.923 4.516l.103-2.29 1.455.065-.284 6.307-1.455-.065.105-2.315-4.582-.206.077-1.703 4.581.207zm-5.454 7.071c.47-2.505 1.089-3.035 3.115-2.655l3.503.657-.314 1.675-3.503-.657c-1.058-.199-1.209-.07-1.453 1.233-.245 1.31-.151 1.477.908 1.676l3.503.657-.314 1.675-3.503-.657c-2.026-.38-2.412-1.098-1.942-3.604zm5.097 5.61l-1.375 3.901c-.734 2.083-1.484 2.393-3.764 1.59-2.28-.803-2.67-1.516-1.936-3.599l1.375-3.902 5.7 2.01zm-3.414.595l-1.478-.513-.752 2.134c-.34.965-.233 1.126 1.097 1.595 1.33.468 1.515.41 1.855-.554l.752-2.134-1.474-.528zm.579 6.856l-.733 1.539-5.456-2.597.732-1.54 5.457 2.598zm-2.953 5.72c-1.583 2.574-2.44 2.784-4.565 1.476-2.124-1.307-2.323-2.166-.74-4.74 1.58-2.567 2.437-2.776 4.561-1.469 2.125 1.308 2.324 2.167.744 4.734zm-1.682-3.208c-1.332-.82-1.553-.802-2.455.663-.905 1.471-.823 1.677.51 2.497s1.554.802 2.459-.67c.902-1.465.819-1.67-.514-2.49zm-3.841 10.491l-3.389-3.09-2.255 2.474-1.077-.982 3.404-3.733 4.466 4.071-1.149 1.26zm-4.23 4.242l-3.014-3.457-2.523 2.2-.957-1.097 3.807-3.32 3.972 4.554-1.285 1.12zm-9.576-.368c2.404-1.575 3.347-1.45 4.713.636 1.367 2.087 1.104 3-1.301 4.575-2.411 1.579-3.296 1.529-4.441-.249l1.497-.981c.611.962.832.974 2.193.083 1.361-.892 1.413-1.138.555-2.447-.857-1.31-1.104-1.361-2.465-.47-1.361.891-1.438 1.099-.793 2.057l-1.497.98c-1.176-1.767-.872-2.605 1.539-4.184zm-5.306 3.198l.414 1.036-2.255 3.187c-.563.784-.616.922-.47 1.289.167.417.299.414 1.386-.02.971-.388 1.06-.498.822-1.096l1.662-.664c.62 1.554.222 2.164-1.98 3.044-2.23.891-2.892.822-3.316-.344-.42-1.175-.409-1.38.113-2.097l1.326-1.84-2.705 1.081-.544-1.36 5.547-2.216zm-7.578 9.058c-2.162.52-3.3-.17-3.809-2.287-.51-2.116.19-3.249 2.352-3.769s3.308.169 3.817 2.285c.509 2.117-.198 3.251-2.36 3.771zm.62-3.352c-.364-1.514-.542-1.655-1.754-1.363-1.213.292-1.3.496-.935 2.01.364 1.514.534 1.656 1.746 1.364 1.213-.291 1.307-.497.943-2.011zm-5.594-1.812l.103 1.111-3.066 2.417c-.762.592-.852.709-.816 1.102.042.448.169.483 1.334.374 1.042-.096 1.158-.177 1.099-.817l1.782-.166c.155 1.666-.401 2.138-2.761 2.357-2.391.222-3.006-.032-3.082-1.269-.069-1.247-.001-1.44.703-1.979l1.793-1.388-2.901.269-.135-1.458 5.947-.553zm-9.754 6.551c-2.399-.117-2.986-.472-2.923-1.772.043-.874.335-1.302.975-1.379-.761-.138-1.071-.627-1.025-1.571.065-1.323.723-1.624 3.277-1.5 2.484.122 3.085.523 3.012 2.009l-1.625-.079c.021-.434-.116-.487-1.408-.55-1.463-.071-1.62-.025-1.643.447-.028.573.109.634 1.586.706l1.417.069-.063 1.285-1.463-.072c-1.339-.065-1.472-.017-1.498.509-.024.48.121.541 1.444.606 1.308.063 1.457.032 1.477-.378l1.532.075c-.068 1.393-.673 1.712-3.072 1.595zm-9.876-4.499l.297-1.347 3.495.77-.297 1.347-3.495-.77zm-8.872-6.58l1.838.765-.082 1.225 2.768 1.153.847-.905 1.731.721-4.648 4.61-2.504-1.043.05-6.526zm1.729 3.465l.019 2.332.043.018 1.683-1.623-1.745-.727zm-6.43.671l2.338-3.946-2.88-1.706.743-1.253 4.345 2.575-3.08 5.198-1.466-.868zm-5.015-3.286l2.775-3.651-2.664-2.025.881-1.16 4.021 3.057-3.656 4.811-1.357-1.032zm-8.425-10.381c.733-.669 1.36-.717 2.031-.155-.523-.698-.503-1.24.04-1.736l1.099-1.003 1.206 1.322-1.03.94c-.463.423-.441.55.196 1.248l1.306 1.43 1.545-1.41 1.149 1.26-4.463 4.074-3.009-3.296c-1.092-1.196-1.106-1.729-.07-2.674zm2.44 1.328c-.564-.618-.667-.639-1.102-.242-.418.381-.412.491.152 1.11l1.452 1.59.95-.867-1.452-1.59zm-4.363-1.104l-1.017-1.368 4.85-3.605 1.017 1.368-4.85 3.605zm.641-10.048l-.86.508c.761-.189 1.377.185 1.956 1.166 1.446 2.448 1.274 3.377-.874 4.645-2.148 1.268-3.044.97-4.489-1.479-1.454-2.461-1.425-3.297.13-4.197l.91 1.54c-.682.385-.675.579.14 1.96.811 1.375 1.051 1.43 2.399.635 1.348-.795 1.415-1.033.603-2.407-.721-1.221-1.007-1.448-1.573-1.186l.855 1.448-1.114.658-1.729-2.93 2.862-1.689.784 1.328zm-6.594.463l-.624-1.586 2.076-.818-1.164-2.955-2.076.817-.625-1.586 5.623-2.214.625 1.586-2.192.863 1.164 2.956 2.192-.863.624 1.586-5.623 2.214zm-1.833-9.745l.521 2.233-1.418.331-1.435-6.15 1.418-.33.527 2.256 4.467-1.042.387 1.66-4.467 1.042zm1.388-9.832c-.332.028-.445.435-.52 1.918-.182 2.403-.517 3.03-1.652 3.128-1.451.125-1.87-.5-2.095-3.117-.226-2.64.157-3.334 1.917-3.485l.153 1.783c-.749.065-.821.219-.704 1.585.116 1.343.182 1.485.592 1.45.347-.03.389-.174.445-1.508.209-2.732.56-3.439 1.803-3.546 1.374-.117 1.771.517 2 3.188.234 2.725-.132 3.44-1.822 3.585l-.154-1.782c.672-.058.736-.22.614-1.64-.124-1.443-.184-1.593-.577-1.56zm-1.925-11.511c.986.11 1.435.551 1.453 1.426.182-.852.603-1.194 1.334-1.112l1.478.167-.201 1.778-1.386-.157c-.623-.07-.705.03-.811.969l-.217 1.925 2.079.234-.192 1.694-6.004-.678.5-4.434c.182-1.609.574-1.97 1.967-1.812zm.607 2.711c.093-.831.042-.923-.544-.989-.562-.063-.641.014-.734.845l-.242 2.14 1.278.144.242-2.14zm-.554-9.988l1.409.372-1.085 4.104.809.214 1.007-3.812 1.334.352-1.008 3.812.885.234 1.088-4.12 1.408.372-1.524 5.768-5.842-1.544 1.519-5.752zm6.306-4.032c-.306-.13-.597.174-1.362 1.447-1.294 2.034-1.885 2.43-2.932 1.98-1.339-.574-1.413-1.323-.378-3.736 1.044-2.435 1.71-2.866 3.333-2.17l-.705 1.644c-.691-.296-.827-.194-1.368 1.066-.531 1.24-.539 1.396-.162 1.558.32.137.425.03 1.104-1.12 1.472-2.311 2.115-2.769 3.261-2.277 1.268.544 1.318 1.29.261 3.754-1.078 2.513-1.738 2.972-3.298 2.303l.706-1.645c.619.266.752.154 1.314-1.156.571-1.331.589-1.492.226-1.648zm.469-9.539l1.24.764-2.224 3.616.712.437 2.066-3.358 1.175.722-2.066 3.36.778.478 2.233-3.629 1.24.763-3.125 5.081-5.147-3.166 3.118-5.067zm6.291-4.969c.761.636.893 1.251.425 1.992.622-.611 1.162-.665 1.727-.193l1.141.955-1.149 1.372-1.069-.894c-.481-.403-.605-.364-1.211.36l-1.242 1.486 1.604 1.342-1.093 1.308-4.636-3.877 2.863-3.423c1.039-1.242 1.564-1.328 2.64-.428zm-.989 2.596c.536-.642.543-.747.092-1.125-.434-.362-.542-.342-1.079.3l-1.381 1.652.986.826 1.382-1.653zm8.024-3.188l-1.891 1.662-5.77-2.976 1.444-1.268 4.229 2.174.035-.031-1.522-4.55 1.391-1.223 2.084 6.212zm3.842-10.06l.789 1.225-3.57 2.299.453.703 3.316-2.135.747 1.16-3.316 2.135.495.768 3.583-2.307.788 1.224-5.015 3.231-3.272-5.08 5.002-3.223zm1.206-.687l3.773-1.698c2.013-.906 2.756-.578 3.748 1.626.992 2.205.746 2.978-1.267 3.885l-3.773 1.698-2.481-5.51zm2.788 2.06l.649 1.423 2.063-.929c.933-.42.975-.608.396-1.894s-.748-1.38-1.681-.96l-2.063.929.636 1.43zm11.858-4.271l.339 1.337-3.47.879-.339-1.337 3.47-.879z"
                />
              </g>
            </Scrollytelling.Animation>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M249 22H0v75h249z" />
              </clipPath>
              <clipPath id="b">
                <path fill="#fff" d="M430 97h249V22H430z" />
              </clipPath>
            </defs>
          </svg>
          <p>I got the whole band set up in the basement & we are jamming.</p>
        </header>

        <section className={s["section"]} ref={containerRef}>
          <div className={s["model-container"]} ref={modelContainerRef}>
            <Canvas
              camera={{ position: [0, 0, 10], fov: 35 }}
              onCreated={() => {
                gsap.to(modelContainerRef.current, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.15,
                });
              }}
              gl={{
                alpha: true,
                antialias: true,
                powerPreference: "high-performance",
              }}
            >
              <MacModel />
            </Canvas>
          </div>

          <div className="wrapper">
            <div className={s["content"]}>
              <div className={s["svg__container"]}>
                <Scrollytelling.Animation
                  tween={{
                    start: 0,
                    end: 100,
                    fromTo: [
                      {
                        attr: {
                          viewBox: "0 0 543 183",
                        },
                        width: toVw(543),
                      },
                      {
                        attr: {
                          viewBox: "0 0 1856 183",
                        },
                        width: toVw(1856),
                      },
                    ],
                  }}
                >
                  <svg
                    className={s["svg-we"]}
                    viewBox="0 0 543 183"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M210.102 0H124.631L97.6302 136.781H96.1997L62.0471 0H0L45.5965 183H134.644L159.856 55.8385H161.287L183.638 183H286.275L329.904 0H270.003L236.387 140.769H234.956L210.102 0Z"
                      fill="white"
                    />
                    <path
                      d="M339.823 0V183H400.618V140.769V109.096V71.5577V42.2308V0H339.823Z"
                      fill="white"
                    />
                    <Scrollytelling.Animation
                      tween={{
                        start: 0,
                        end: 100,
                        fromTo: [
                          {
                            attr: {
                              width: toVw(143, 1920, 143),
                            },
                          },
                          {
                            attr: {
                              width: toVw(490, 1920, 490),
                            },
                          },
                        ],
                      }}
                    >
                      <rect
                        x="400"
                        y="141"
                        width="143"
                        height="42"
                        fill="white"
                      />
                    </Scrollytelling.Animation>
                    <Scrollytelling.Animation
                      tween={{
                        start: 0,
                        end: 100,
                        fromTo: [
                          {
                            attr: {
                              width: toVw(143, 1920, 143),
                            },
                          },
                          {
                            attr: {
                              width: toVw(490, 1920, 490),
                            },
                          },
                        ],
                      }}
                    >
                      <rect
                        x="400"
                        y="71"
                        width="143"
                        height="38"
                        fill="white"
                      />
                    </Scrollytelling.Animation>
                    <Scrollytelling.Animation
                      tween={{
                        start: 0,
                        end: 100,
                        to: {
                          keyframes: {
                            "0%": {
                              attr: {
                                width: toVw(143, 1920, 143),
                              },
                            },
                            "75%": {
                              attr: {
                                width: toVw(490, 1920, 490),
                              },
                            },
                            "100%": {
                              attr: {
                                width: toVw(1440, 1920, 1440),
                              },
                            },
                            easeEach: "linear",
                          },
                        },
                      }}
                    >
                      <rect x="400" width="143" height="42" fill="white" />
                    </Scrollytelling.Animation>
                  </svg>
                </Scrollytelling.Animation>
                <Scrollytelling.Animation
                  tween={{
                    start: 0,
                    end: 85,
                    to: {
                      translateX: "0%",
                      scaleY: 0.613,
                    },
                  }}
                >
                  <svg
                    className={s["svg-make"]}
                    fill="none"
                    viewBox="0 0 924 187"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M59.0072 187V56.8192H60.6165L96.9148 187H169.869L206.346 53.9423H207.419V187H268.214V0H173.624L138.756 126.824H137.326L102.1 0.479482L0 0V187H59.0072Z"
                      fill="white"
                    />
                    <path
                      d="M449.1 0H348.788L277.979 187H341.457L352.722 155.354H442.126L452.14 187H517.942L449.1 0ZM367.205 114.597L396.172 33.5641H397.603L428 114.597H367.205Z"
                      fill="white"
                    />
                    <path
                      d="M527.698 187H588.493V167.581L620.858 127.544L656.62 187H731.362L664.13 80.0744L727.786 0H662.163L588.493 94.459V0H527.698V187Z"
                      fill="white"
                    />
                    <path
                      d="M741.257 0V187H924V143.846H802.052V111.481H916.49V73.1218H802.052V43.1538H923.642V0H741.257Z"
                      fill="white"
                    />
                  </svg>
                </Scrollytelling.Animation>
              </div>
              <div>
                <svg
                  className={s["svg-coolshit"]}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1856 258"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M201.778.325V18.67h-18.344V.325H91.717V18.67H55.03v18.343H36.687v18.343H18.343v36.687H0v91.718h18.343v36.686h18.344v18.344h36.687v18.343h55.03V238.79h36.687v-18.344h18.343v-18.343h18.344V183.76h-18.344v18.343h-18.343v18.343h-36.687v18.344h-55.03v-18.344H55.03V183.76H36.687V92.042H55.03V55.355h18.344V37.013h18.343V18.67h73.374v18.343h18.343v18.343h18.344v36.687h18.343V.325h-18.343ZM330.325 18.67h73.374v18.343h18.343V73.7h18.344v91.717h-18.344v36.687h-18.343v18.343h-18.344v18.344h-73.373v-18.344h-18.344V183.76h-18.343V92.042h18.343V55.355h18.344V37.013h18.343V18.67Zm0 0h-36.687v18.343h-18.343v18.343h-18.344v36.687h-18.343v91.718h18.343v36.686h18.344v18.344h36.687v18.343h73.373V238.79h36.687v-18.344H439V243h24.232v14h27.537v-14h24.23v-22.554h17.176v18.344h36.687v18.343h73.373V238.79h36.687v-18.344h18.344v-18.343h18.343v-36.687h18.343V73.699h-18.343V37.012h-18.343V18.67h-36.687V.325h-73.374V18.67h-36.687v18.343h-18.343v18.343h-18.344v36.687h-18.343v91.718h18.343V219h-26.368v14h-20.927v-14h-26.15v-16.897h18.343v-36.687h18.344V73.699h-18.344V37.012h-18.343V18.67h-36.687V.325h-73.374V18.67Zm256.88 0v18.343h-18.343v18.343h-18.344v36.687h-18.343v91.718h18.343v36.686h18.344v18.344h73.373v-18.344h18.344v-18.343h18.343v-36.687h18.344V73.699h-18.344V37.012h-18.343V18.67h-73.374ZM807.398 238.79v-36.687h18.343v-55.03h18.344V73.699h18.343v-55.03h18.344V.325h-73.374V18.67h18.343v55.03h-18.343v73.374h-18.344v55.03h-18.343v36.687h-18.343v18.343h183.434v-36.687h18.343V183.76h-18.343v36.686h-18.344v18.344h-110.06ZM381 71h-25v24h18v14h25V85h-18V71Zm257 0h-25v24h18v14h25V85h-18V71ZM1149.14 3h-72.5v18.125h-18.12v18.124h-18.13v54.374h18.13v18.125h18.12v18.124h18.13v18.125h18.12v18.124h18.13v18.125h18.12v36.249h-18.12v18.125h-72.5v-18.125h-18.13v-36.249h-18.12v36.249h-18.13v36.249h18.13v-36.249h18.12v18.125h18.13v18.124h90.62V238.62h18.13v-18.125h18.12v-54.374h-18.12v-18.124h-18.13v-18.125h-18.12v-18.124h-18.13V93.623h-18.12V75.498h-18.13V39.25h18.13V21.125h54.37v18.124h18.13V75.5h18.12v-36.25h18.13V3h-18.13v36.25h-18.12V21.124h-18.13V3Zm344.23 0h-72.5v18.125h18.12v54.373h-18.12v54.374h-108.75V75.498h18.13V21.125h18.12V3h-72.5v18.125H1294v54.373h-18.13v72.499h-18.12v54.374h-18.13v36.249h-18.12v18.124h72.5V238.62h-18.13v-36.249H1294v-54.374h108.74v54.374h-18.12v36.249h-18.13v18.124h72.5V238.62h-18.12v-36.249h18.12v-54.374h18.13V75.498h18.12V21.125h18.13V3Zm54.37 0h72.5v18.125h-18.13v54.373h-18.12v54.374h-18.12v72.499h-18.13v36.249h18.13v18.124h-72.5V238.62h18.12v-36.249h18.13v-72.499h18.12V75.498h18.13V21.125h-18.13V3ZM1856 3h-199.37v36.25h-18.12v18.124h18.12V39.249h18.12V21.125h54.38v54.373H1711v72.499h-18.12v54.374h-18.13v36.249h-18.12v18.124h72.5V238.62H1711v-36.249h18.13v-54.374h18.12V75.498h18.13V21.125h72.5v18.124h-18.13v18.125h18.13V39.249H1856V3Zm-55 183h27.54v24h27v24h-27v23H1801v-23h-27v-24h27v-24Zm27 47v-23h-26.46v23H1828Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={s["svg__container"]}>
                <Scrollytelling.Animation
                  tween={{
                    start: 0,
                    end: 100,
                    fromTo: [
                      {
                        xPercent: 0,
                        width: toVw(415),
                        marginRight: toVw(70),
                        attr: {
                          viewBox: "0 0 415 115",
                        },
                      },
                      {
                        xPercent: 0,
                        width: toVw(125),
                        marginRight: toVw(24),
                        attr: {
                          viewBox: "0 0 125 115",
                        },
                      },
                    ],
                  }}
                >
                  <svg
                    className={s["svg-that"]}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 415 115"
                    fill="none"
                  >
                    <Scrollytelling.Animation
                      tween={{ start: 0, end: 100, to: { scaleX: 0.3 } }}
                    >
                      <path
                        fill="#fff"
                        d="M32.877 113H63.42V26.077h33.057V0H0v26.077h32.877V113ZM101.415 113h30.542V66.351h40.423V113h30.542V0H172.38v40.274h-40.423V0h-30.542v113ZM292.994 0H242.6l-35.573 113h31.89l5.659-19.123h44.914L294.521 113h33.057L292.994 0Zm-41.142 69.249 14.552-48.967h.719l15.271 48.967h-30.542ZM351.401 113h30.542V26.077H415V0h-96.476v26.077h32.877V113Z"
                      />
                    </Scrollytelling.Animation>
                  </svg>
                </Scrollytelling.Animation>

                <Scrollytelling.Animation
                  tween={{ start: 0, end: 100, to: { scaleX: 1.5 } }}
                >
                  <svg
                    className={s["svg-performs"]}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1118 115"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M0 1.716v111.568h38.416V78.24h48.699c27.117-2.288 33.897-9.87 33.897-37.904 0-30.896-6.78-38.62-33.897-38.62H0Zm38.416 50.778V27.463h27.909c12.09 0 15.14 2.574 15.14 13.016 0 9.583-3.05 12.015-15.14 12.015H38.416ZM129.541 1.716v111.568h115.475V87.537h-77.059v-19.31h72.313V45.343h-72.313v-17.88h76.833V1.717H129.541ZM335.542 1.716h-79.771v111.568h38.417V75.379h30.055c14.236 0 15.818 1.288 15.818 13.589v24.316h38.417V87.251c0-16.878-9.265-24.173-30.846-24.173v-.858c21.581 0 30.846-8.439 30.846-28.178 0-25.889-5.876-32.326-42.936-32.326Zm-41.354 49.347v-25.03h28.473c14.689 0 16.27 1.287 16.27 12.3 0 11.443-1.581 12.73-16.27 12.73h-28.473ZM389.174 1.716v111.568h38.416l.339-38.62h71.974V48.918h-71.635l.226-21.455h75.929V1.716H389.174ZM587.497 24.316c32.089 0 35.591 3.29 35.591 33.184s-3.502 33.184-35.591 33.184-35.592-3.29-35.592-33.184 3.503-33.184 35.592-33.184ZM512.359 57.5c0 46.057 15.14 57.5 75.138 57.5 59.997 0 75.138-11.443 75.138-57.5S647.494 0 587.497 0c-59.998 0-75.138 11.443-75.138 57.5ZM750.866 1.716h-79.77v111.568h38.416V75.379h30.055c14.237 0 15.819 1.288 15.819 13.589v24.316h38.416V87.251c0-16.878-9.265-24.173-30.846-24.173v-.858c21.581 0 30.846-8.439 30.846-28.178 0-25.889-5.875-32.326-42.936-32.326Zm-41.354 49.347v-25.03h28.474c14.688 0 16.27 1.287 16.27 12.3 0 11.443-1.582 12.73-16.27 12.73h-28.474ZM841.785 113.284V35.616h1.017l22.937 77.668h46.099l23.05-79.385h.678v79.385h38.417V1.716h-59.772l-22.033 75.666h-.904l-22.259-75.38-64.517-.286v111.568h37.287ZM1049.98 90.684c-25.76 0-28.59-1.43-28.59-14.876h-38.977c0 31.325 14.349 39.192 68.247 39.192 53.89 0 67.34-6.294 67.34-31.754 0-27.605-13.56-35.472-67.79-39.191-21.02-1.574-26.33-3.576-26.33-10.299 0-8.439 2.71-9.44 26.78-9.44 24.97 0 27.79 1.573 27.79 16.449h38.99C1117.44 8.153 1103.42 0 1050.66 0c-53.107 0-66.327 6.723-66.327 33.47 0 24.173 12.316 31.325 61.807 36.045 25.87 2.431 32.31 4.863 32.31 12.158 0 8.153-2.82 9.011-28.47 9.011Z"
                    />
                  </svg>
                </Scrollytelling.Animation>
              </div>
              <div className={s["footer"]}>
                <p>
                  We’re a boutique studio of ambitious creatives working at the
                  edge of performant and immersive digital experiences, giving
                  110% to bring projects from a realm of ideas to reality
                  through branding, visual design & development of the highest
                  quality.
                </p>
                <svg
                  viewBox="0 0 24 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0.226562L24 6.00007L14 11.7736L14 7.00006L0 7.00006V5.00006L14 5.00007L14 0.226562Z"
                    fill="white"
                  />
                </svg>
                <p>
                  We don&apos;t settle, we are intentional about building with
                  surgical precision and creating extraordinary experiences. We
                  go the extra mile, and then walk a couple more,
                  <br /> just for fun.
                </p>
                <p>
                  Sometimes size doesn&apos;t matter. we work for big & small
                  non-stoppable visionaries. here&apos;s love for them all.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
