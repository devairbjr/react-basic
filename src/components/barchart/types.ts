export interface OwnProps {
  data: Array<{
    ano: string
    saldo: string
    porcentagem: number
  }>
  title: string
}

export type Props = OwnProps

export interface ICustomToolip {
  active: any
  payload: any
  label: any
}
