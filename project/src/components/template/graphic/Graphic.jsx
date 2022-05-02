import React, {Component} from 'react'
import Main from '../Main'
import axios from 'axios'
import { Chart } from 'react-google-charts'
import './Graphic.css'

const headerProps = {
    icon: 'list',
    title: 'Gráfico',
    subtitle: 'Gráfico com o número de usuários e a meta a ser alcançada!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    size: 0
}

export default class Graphic extends Component{

    state = {...initialState}

    renderGraphic(){

        const size = axios(baseUrl).then(resp => {
            const list = resp.data
            this.setState({size : list.length})
        })  
            
            return(
            <div className="graph">
            <Chart
            chartType='ColumnChart'
            data={[['Users', ''], ['Number of users', this.state.size], ['Goal', 20]]}
            width='80%'
            height='500px'
        />
        </div>
            )
        }
       

render(){
    return(
        <Main {...headerProps}>
        {this.renderGraphic()}
        </Main>
    )
}

}
