export interface OwnProps {
  data: Array<{
    ano: string
    compras: string
    vendas: string
    icms: string
    st: string
  }>
  title: string
}

export type Props = OwnProps
