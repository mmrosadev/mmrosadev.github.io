import styled from 'styled-components'

interface SwiperWrapperProps {
  translateX: number
}

// interface SwiperWrapperProps {
//   translateX: number
// }

export const SwiperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${4*280+8*4}px;
  overflow: hidden;
  position: relative;
`

export const SwiperWrapper = styled.div<SwiperWrapperProps>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
`

export const SwiperButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    color: #000;
  }

  &.left {
    left: 1px;
  }

  &.right {
    right: 1px;
  }
`
