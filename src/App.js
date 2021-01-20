import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            dietaryRestriction: {
                isVegan: false,
                isCosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ?
            this.setState(prevState => {
                return {
                    dietaryRestriction: {
                        ...prevState.dietaryRestriction,
                        [name]: checked
                    }
                }
            }) :
        this.setState({
            [name] : value
        }) 
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        name= 'firstName' 
                        value= {this.state.firstName}
                        onChange= {this.handleChange} 
                        placeholder="First Name" />
                    <br />
                    
                    <input 
                        name= 'lastName' 
                        value= {this.state.lastName} 
                        onChange= {this.handleChange} 
                        placeholder="Last Name" />
                    <br />
                    
                    <input 
                        name= 'age' 
                        value= {this.state.age} 
                        onChange= {this.handleChange} 
                        placeholder="Age" />
                    <br />
                    
                    <label>
                        <input 
                            value= 'Male'
                            type= 'radio'
                            name= 'gender'
                            checked= {this.state.gender === 'Male'}
                            onChange= {this.handleChange}
                        /> Male
                    </label>

                    <label>
                        <input 
                            type= 'radio'
                            value= 'Female'
                            name= 'gender'
                            checked= {this.state.gender === 'Female'}
                            onChange= {this.handleChange}                        
                        /> Female
                    </label>

                    <br />
                    <br />

                    <label>
                        <input 
                            type= 'checkbox'
                            name= 'isVegan'
                            onChange= {this.handleChange}
                            checked= {this.state.dietaryRestriction.isVegan}
                        /> I'm vegan!
                    </label>
                    <br />

                    <label>
                        <input 
                            type= 'checkbox'
                            name= 'isKosher'
                            onChange= {this.handleChange}
                            checked= {this.state.dietaryRestriction.isKosher}
                        /> I'm Kosher!
                    </label>
                    <br />

                    <label>
                        <input 
                            type= 'checkbox'
                            name= 'isLactoseFree'
                            onChange= {this.handleChange}
                            checked= {this.state.dietaryRestriction.isLactoseFree}
                        /> I'm Lactose free!
                    </label>
                    <br />

                    <select 
                        value= {this.state.destination} 
                        name= 'destination' 
                        onChange= {this.handleChange}>

                        <option value='Spain'>Spain</option>
                        <option value='France'>France</option>
                        <option value='Italy'>Italy</option>
                        <option value='Slovenia'>Slovenia</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName} </p>
                <p>Your age: {this.state.age} </p>
                <p>Your gender: {this.state.gender} </p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <ul>
                      
                        {this.state.dietaryRestriction.isVegan ? 'Is a fucking vegan' : null}
                        {this.state.dietaryRestriction.isKosher ? 'Is a fucking kosher' : null}
                        {this.state.dietaryRestriction.isLactoseFree ? 'Is a fucking lactose free' : null}
                        
                    </ul>
                    
                </p>
            </main>
        )
    }
}

export default App

