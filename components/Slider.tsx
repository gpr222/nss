import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from "../styles/Slider.module.css"


const images = [
    "https://images.shiksha.com/mediadata/images/1532934986phpVgWnJk.jpeg",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://www.dcrustedp.in/img_rr_06.JPG"
]

export default function App() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
      }
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className={`keen-slider`}>
        {images.map((image) => (
            <div className={`keen-slider__slide ${styles["slide"]}`} key={image}>
                <div className={styles.image_slide}>
                    <img src={image} alt=""/>
                </div>
            </div>
        ))}
      </div>
    </>
  )
}
