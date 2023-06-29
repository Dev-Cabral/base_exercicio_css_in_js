import { VagasComponente, VagasTitulo, VagasLinks } from './styles'

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
  <VagasComponente>
    <VagasTitulo>{props.titulo}</VagasTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <>Requisitos: {props.requisitos.join(', ')}</>
    </ul>
    <VagasLinks href="#">Ver detalhes e candidatar-se</VagasLinks>
  </VagasComponente>
)

export default Vaga
