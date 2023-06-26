import styled from 'styled-components'

export const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export default Formulario

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: #eee;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
