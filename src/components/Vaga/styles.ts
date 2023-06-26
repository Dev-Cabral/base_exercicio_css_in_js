import styled from 'styled-components'

export const Vagas = styled.li`
  border: 1px solid #f9f5e7;
  background-color: #a7727d;
  color: #f9f5e7;
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
`

export default Vagas

export const VagasTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagasLinks = styled.a`
  border-color: #a7727d;
  background-color: #f9f5e7;
  color: #a7727d;
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
