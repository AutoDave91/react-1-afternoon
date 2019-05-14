import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            employees: [{
                name:'Jimmy Jo',
                title: 'Hack0r',
                age: 12
            }, {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
              }, {
                name: 'Carly Armstrong',
                title: 'CEO'
              }],
            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(val){
        this.setState({userInput: val});
    }
    filterEmployees(p){
        let employees = this.state.employees;
        let filteredEmployees = [];
        let search = p;
        
        for(let i=0; i<employees.length; i++){
            for(search in employees){
                if(employees.hasOwnProperty(search)){
                    filteredEmployees.push(employees[i]);
                }
            };
        };
        this.setState({filteredEmployees: filteredEmployees});
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.employees, null, 10)}</span>
                <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=> this.filterEmployees(this.state.userInput)}> Filter</button>
                <span className='resoltsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;