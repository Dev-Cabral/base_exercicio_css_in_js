import { Vagas, VagasTitulo, VagasLinks } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    <VagasTitulo>{props.titulo}</VagasTitulo>
    <>
      <>Localizacao: {props.localizacao}</>
      <>Senioridade: {props.nivel}</>
      <>Tipo de contratacao: {props.modalidade}</>
      <>
        Salário: {props.salarioMin} - {props.salarioMax}
      </>
      <>Requisitos: {props.requisitos.join(', ')}</>
    </>
    <VagasLinks href="#">Ver detalhes e candidatar-se</VagasLinks>
  </Vagas>
)

export default Vaga
