import { useState } from 'react'
import { SwiperButton, SwiperContainer, SwiperWrapper } from './styles'
import { Card, CardProps } from '@/components'

interface CardsSwiperProps {
    slides: CardProps[]
    slidesPerView: number
    slideWidth: number
}

export function Swiper({
    slides,
    slidesPerView,
    slideWidth,
}: CardsSwiperProps) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        const maxSlides = slides.length - slidesPerView

        if (currentSlide < maxSlides) {
            setCurrentSlide((prev) => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1)
        }
    }

    return (
        <SwiperContainer>
            <SwiperButton className="left" onClick={prevSlide}>
                &lt;
            </SwiperButton>

            <SwiperWrapper translateX={-currentSlide * slideWidth}>
                {slides.map((slide, index) => (
                    <div key={index} style={{ padding: '0px 1px' }}>
                        <Card
                            key={index}
                            imageSource={slide.imageSource}
                            title={slide.title}
                            subtitle={slide.subtitle}
                            urlCode={slide.urlCode}
                            urlApplication={slide.urlApplication}
                        />
                    </div>
                ))}
            </SwiperWrapper>

            <SwiperButton className="right" onClick={nextSlide}>
                &gt;
            </SwiperButton>
        </SwiperContainer>
    )
}