import React from 'react';
import './Mytable.css';
class Mytable extends React.Component {
	constructor(props) {
	   super(props)
	   this.state = {
		  students: [
			 { id: 1, name: 'SrinivasI', age: 31, email: 'ippili@gmail.com',location:'Hyderabad' },
			 { id: 2, name: 'Prashanth', age: 29, email: 'prashanth@gmail.com',location:'Hyderabad' },
			 { id: 3, name: 'Swathi', age: 26, email: 'swathi@gmail.com',location:'Hyderabad'  },
             { id: 4, name: 'Amar', age: 25, email: 'amar@gmail.com',location:'Hyderabad'  },
             { id:5, name:'Guru', age:30, email:'guru@gmail.com',location:'Hyderabad' },
             { id:6, name:'Admin', age:20, email:'admin@gmail.com',location:'Hyderabad' },
             { id:7, name:'Ankit', age:30, email:'ankit@gmail.com',location:'Hyderabad' },
             { id:8, name:'Naga', age:50, email:'naga@gmail.com',location:'Hyderabad' }
		  ]
	   }
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email,location } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
                 <td>{location}</td>
              </tr>
           )
        })
     }
     renderTableHeader(){
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     render() {
        return (
           <>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='students'>
                 <tbody>
                      <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </>
        )
     }
}
export default Mytable;