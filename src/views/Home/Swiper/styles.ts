import styled from 'styled-components'

interface SwiperWrapperProps {
  slidesPerView: number
  slideWidth: number
}


export const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SwiperWrapper = styled.div<SwiperWrapperProps>`
  display: flex;
  width: ${({ slidesPerView, slideWidth }) => slidesPerView * slideWidth}px;
  overflow: hidden;
`

export const SwiperButton = styled.button`
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SwiperButtonLabel = styled.span`
  font-size: 40px;
  color: #413B6B;
`

export const CardWrapper = styled.span`
  padding: 0px 1px;
`