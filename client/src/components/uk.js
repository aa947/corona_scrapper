import React, { Component } from 'react';
import axios from "axios";

export class UK extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numbers: [],
            source: "", 
            loading: true
        }
    }

  
    getData = (refer) => {
        axios.get("http://localhost:5000/uk")
            .then((res) => {
                console.log('updated uk');
                refer.setState({
                    numbers: res.data.numbers,
                    source: res.data.source,
                    loading: false
                })
            })

            .catch((err) => { return console.log(err) });
    }



    componentDidMount() {
        this.getData(this);

        this.interval = setInterval(() => { this.getData(this) }, 1000*60);

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {

        const { numbers, source, loading } = this.state;

        const tdMarkUp = loading ? (
            <>
              <th scope="row">UK</th>
       <td> loading .. </td>
       <td> loading .. </td>
       <td> loading .. </td>
            </>
        ) : (
            <>
              <th scope="row">UK</th>
      { numbers && <td> { numbers[0] } </td>}
      { numbers && <td> { numbers[1] } </td>}   
      { numbers && <td> { numbers[2] } </td>}
            </>
        )
        return (
            <>

                {tdMarkUp}

            </>
        )
    }
}

export default UK
