import React, {useEffect} from 'react'
import {useState} from 'react'

import CT from 'ct-brazil-components'

const App = () => {
  const [formData, setFormData] = useState({location: "teste"});
  // const selectOptions = 
  // [
  //   { label: 'Select', value: '' },
  //   { label: '1', value: '1' },
  //   { label: '2', value: '2' },
  //   { label: '3', value: '3' },
  //   { label: '4', value: '4' },
  //   { label: '5', value: '5' },
  //   { label: '6', value: '6' },
  // ]

  // const columns =
  // [
  //   { Header: 'Agency', accessor: 'id' },
  //   { Header: 'D-Group', accessor: 'name'},
  //   { Header: 'Beat', accessor: 'username'},
  //   { Header: 'Priority', accessor: 'email'},
  // ]

  // const dataRows = 
  // [
  //   { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz",},
  //   { "id": 2, "name": "Leanne Graham1", "username": "Bret3", "email": "Sincere@april.biz1",},
  //   { "id": 3, "name": "Leanne Graham2", "username": "Bret2", "email": "Sincere@april.biz2",},
  //   { "id": 4, "name": "Leanne Graham3", "username": "Bret1", "email": "Sincere@april.biz3",},
  // ]
  
  return (
    <CT.Aux>
      {/* <CT.CommentsAndRemark active quantity={5}/>
      <CT.Attachement click={() => {alert('clicou')}}/>
      <CT.SuplementalInfo />
      <CT.LocationOfIntereset />
      <CT.InformerReturns /> */}

      <CT.Container>
        <CT.Row >
          <CT.Form width="400px">
            <CT.FormRow>
              {/* <CT.Input change={(e) => {setFormData({location: e.target.value})}} value={formData.location} label="Location" required type="search"></CT.Input>
              <CT.Button ><img alt="" height="16px" src="http://www.placecage.com/g/16/16" /></CT.Button> */}
             <CT.StackedIncidents click={teste} quantity={4}></CT.StackedIncidents>
            </CT.FormRow>
            <CT.FormRow>
              <CT.Input change={(e) => {setFormData({location: e.target.value})}} value={formData.location} label="Location" required type="search"></CT.Input>
              <CT.Button ><img alt="" height="16px" src="http://www.placecage.com/g/16/16" /></CT.Button>
            </CT.FormRow>
            <CT.FormRow>
              <CT.Input change={(e) => {setFormData({location: e.target.value})}} value={formData.location} label="Location" required type="search"></CT.Input>
            </CT.FormRow>
          </CT.Form>
          {/* <div>
            <CT.Table columns={columns} dataRows={dataRows} />
            <CT.Table columns={columns} selectOptions={selectOptions} dataRows={dataRows} />
          </div> */}
        </CT.Row>
        <CT.Footer>

        </CT.Footer>
      </CT.Container>
    </CT.Aux>
  )
}

export default App
