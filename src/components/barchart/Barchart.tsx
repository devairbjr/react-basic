import { ReactElement } from 'react'
import {
  BoxCustomTooltip,
  ContainerIndiceChart,
  ContainerIndice,
  Title,
  BoxChart,
  ItemIndice,
  CustomBrightness1Icon,
} from './styles'
import { Props } from './types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts'
import { barColor } from '../../utils/util'

import { TooltipProps } from 'recharts'
import {
  ValueType,
  NameType,
} from 'recharts/src/component/DefaultTooltipContent'

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <BoxCustomTooltip>
        <span>{`${label}`}</span>
        <span>{' | ' + `${payload[0].payload.porcentagem}%` + ' | '}</span>
        <span>{`${payload[0].payload.saldo}`}</span>
      </BoxCustomTooltip>
    )
  }
  return null
}

function Barchart({ data, title }: Props): ReactElement {
  const renderIndice = data.map((indice, index) => (
    <ItemIndice>
      <CustomBrightness1Icon
        sx={{ color: barColor[index] }}
      ></CustomBrightness1Icon>
      {indice.ano}
    </ItemIndice>
  ))

  return (
    <ContainerIndiceChart>
      <ContainerIndice>
        <Title>Indice</Title>
        {renderIndice}
      </ContainerIndice>
      <BoxChart>
        <Title>{title}</Title>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={false}
            fillOpacity={0.8}
          />
          <YAxis
            hide={true}
            axisLine={false}
            tickLine={false}
            domain={[0, 300]}
            dataKey="porcentagem"
          />
          <XAxis hide={true} axisLine={false} tickLine={false} dataKey="ano" />

          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <Bar dataKey="porcentagem" fill="#000">
            {data.map(
              (item, index) =>
                item && <Cell key={`cell-${index}`} fill={barColor[index]} />,
            )}
          </Bar>
        </BarChart>
      </BoxChart>
    </ContainerIndiceChart>
  )
}

export default Barchart
