import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import {
  CBadge,
  CCard,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'

import slidersData from './SlidersData'
import { getSlider } from 'src/actions/sliderAction';

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const Sliders = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {sliderList} = useSelector(state => state.slider)
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)
  //const [sliders, setSliders] = useState([]);

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/sliders?page=${newPage}`)
  }

  useEffect(() => {
    dispatch(getSlider())
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page]
  )

console.log(sliderList)
  return (
    <>
    <CButton 
    onClick={() => history.push(`/sliders/add`)}
    block color="primary">Add Slider</CButton>
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            Sliders
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={slidersData}
            fields={[
              { key: 'name', _classes: 'font-weight-bold' },
              'registered', 'role', 'status'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/sliders/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false} 
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          Combined All dark Table
        </CCardHeader>
        <CCardBody>
        <CDataTable
          items={slidersData}
          fields={fields}
          dark
          hover
          striped
          bordered
          size="sm"
          itemsPerPage={10}
          pagination
          scopedSlots = {{
            'status':
              (item)=>(
                <td>
                  <CBadge color={getBadge(item.status)}>
                    {item.status}
                  </CBadge>
                </td>
              )
          }}
        />
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</>
  )
}

export default Sliders
