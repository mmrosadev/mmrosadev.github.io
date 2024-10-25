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
  padding: 8px;
  border-radius: 99999px;
  background-color: #413B6B;

  width: 8px;
  height: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const SwiperButtonLabel = styled.span`
  font-size: 20px;
`

export const CardWrapper = styled.span`
  padding: 0px 1px;
`