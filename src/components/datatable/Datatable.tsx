import React, { ReactElement } from 'react'
import { CustomBrightness1Icon } from './styles'
import { Props } from './types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { barColor } from '../../utils/util'

function Datatable({ title, data }: Props): ReactElement {
  function createData(
    ano: string,
    compras: string,
    vendas: string,
    icms: string,
    st: string,
  ) {
    return { ano, compras, vendas, icms, st }
  }

  const rows = data.map((row) =>
    createData(row.ano, row.compras, row.vendas, row.icms, row.st),
  )
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Ano</TableCell>
            <TableCell align="right">Compras</TableCell>
            <TableCell align="right">Vendas</TableCell>
            <TableCell align="right">ICMS PAGO</TableCell>
            <TableCell align="right">ST PAGO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.ano}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <CustomBrightness1Icon
                  sx={{ color: barColor[index] }}
                ></CustomBrightness1Icon>
                {row.ano}
              </TableCell>
              <TableCell align="right">{row.compras}</TableCell>
              <TableCell align="right">{row.vendas}</TableCell>
              <TableCell align="right">{row.icms}</TableCell>
              <TableCell align="right">{row.st}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Datatable
