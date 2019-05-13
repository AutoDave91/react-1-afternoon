import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(v){
        this.setState({userInput: v});
    }
    palindrome(userInput){
        let prepped = userInput.split('');
        let reversed = prepped.reverse();
        let restrung = reversed.join('');
        
        if(restrung === userInput){
            this.setState({palindrome: 'true'});
        }
        else{
            this.setState({palindrome: 'false'})
        }
    }

    render(){
        return(
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={()=>this.palindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;