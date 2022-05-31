import { Link, useNavigate } from 'react-router-dom'
import { ContainerTag, ContainerTable, ContainerChart, Title } from './styles'
import Card from '../../components/card'
import Datatable from '../../components/datatable'
import Barchart from '../../components/barchart'
import request from '../../services/api'
import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
  const [tags, setTags] = useState([])
  const [balance, setBalance] = useState([])
  const [balanceDetails, setBalanceDetails] = useState([])
  const [loading, setLoading] = useState(false)

  type typeTag = {
    tag: string
    valor: string
  }
  useEffect(() => {
    setLoading(true)
     request('GET', `purchases/dashboard`).then((response: any) => {
        const { data } = response
        if (data?.data?.tags) {
          setTags(data.data.tags)
        }
        if (data?.data?.balance) {
          setBalance(data.data.balance)
        }
        if (data?.data?.balanceDetails) {
          setBalanceDetails(data.data.balanceDetails)
        }
        setLoading(false)
      })
      .catch((err: any) => {
        console.error('ops! ocorreu um erro : ' + err)
      })

  }, [])
  const getData = () => {
    return request('GET', `purchases/dashboard`)
  }

  const renderTags = tags.map((tag: typeTag) => (
    <Card title={tag.tag} amount={tag.valor} />
  ))

  return (
    <div>
      {renderTags.length > 0 && <ContainerTag>{renderTags}</ContainerTag>}
      {balance.length > 0 && (
        <ContainerChart>
          <Barchart data={balance} title="Faturamento por Ano"></Barchart>
        </ContainerChart>
      )}
      {balanceDetails.length > 0 && (
        <ContainerTable>
          <Datatable title="Relatório" data={balanceDetails}></Datatable>
        </ContainerTable>
      )}
      {loading && (
        <Backdrop
          open={loading}
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  )
}

export default Dashboard
