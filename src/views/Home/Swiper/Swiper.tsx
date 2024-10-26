import { useEffect, useState } from 'react'
import { Card, CardProps } from '@/components'
import {
    CardWrapper,
    SwiperButton,
    SwiperButtonLabel,
    SwiperContainer,
    SwiperWrapper
} from './styles'

interface CardsSwiperProps {
    slides: CardProps[]
    slideWidth: number
}

export function Swiper({
    slides,
    slideWidth,
}: CardsSwiperProps) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(3)

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

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 700) {
                setSlidesPerView(1)
            } else if (window.innerWidth > 700 && window.innerWidth <= 1024) {
                setSlidesPerView(2)
            } else if (window.innerWidth > 1024 && window.innerWidth <= 1440) {
                setSlidesPerView(3)
            } else if (window.innerWidth > 1440 && window.innerWidth <= 2048) {
                setSlidesPerView(4)
            } else {
                setSlidesPerView(5)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <SwiperContainer>
            <SwiperButton onClick={prevSlide}><SwiperButtonLabel>&lt;</SwiperButtonLabel></SwiperButton>
            <SwiperWrapper
                slidesPerView={slidesPerView}
                slideWidth={slideWidth}
            >
                {slides.slice(currentSlide, slidesPerView + currentSlide).map((slide) => (
                    <CardWrapper key={slide.id}>
                        <Card
                            imageSource={slide.imageSource}
                            title={slide.title}
                            subtitle={slide.subtitle}
                            urlCode={slide.urlCode}
                            urlApplication={slide.urlApplication}
                        />
                    </CardWrapper>
                ))}
            </SwiperWrapper>
            <SwiperButton onClick={nextSlide}><SwiperButtonLabel>&gt;</SwiperButtonLabel></SwiperButton>
        </SwiperContainer>
    )
}