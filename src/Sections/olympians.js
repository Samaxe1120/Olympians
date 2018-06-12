import React, {Component} from 'react'
import gods from './gods.js'
import './App.css'





class Zeus extends Component {
    constructor(props){
        super(props)
         this.state = {
         bioText: ''
        }
        }

        componentWillMount(){
            this.setState({  bioText: 'Hover to unlock the secrets of the Gods'})
          }
          
            
            zeushoverBio = (props) => {
               this.setState({ bioText: 'Zeus was the last child of Chronus and Rhea and a very imposing figure. Often referred to as the “Father of Gods and men”, he is a sky god who controls lightning (often using it as a weapon) and thunder. Zeus is king of Mount Olympus, the home of Greek gods, where he rules the world and imposes his will onto gods and mortals alike.'}) 
               }
          
               zeushoverLeave = (props) => {
                 this.setState({bioText :"Hover to unlock the secrets of the Gods"})
               }

               render(){
              return(
            <div  onMouseEnter = {this.zeushoverBio} onMouseLeave = {this.zeushoverLeave} className= 'section1'>
                        <div>
                        <h1 className = 'title'> Zeus: King of the Gods</h1>
              <img className = 'zeus' alt='Zeus' src = 
              'https://d1u5p3l4wpay3k.cloudfront.net/smite_gamepedia/thumb/e/e3/SkinArt_Zeus_Default.jpg/250px-SkinArt_Zeus_Default.jpg?version=631384ff4d91502fff20fde3d862b134'/>          
        </div>
              <div className ='biodiv'>
             <h1 style = {{opacity: !this.zeushoverBio  ? 0.5 : 1, color: this.zeushoverBio ? 'white' : 'lightblue'}}    className = 'bio1'>{this.state.bioText} </h1>
              </div>
           
                         
              
       </div>
    )
}
}

   class Poseidon extends Component {
       constructor(props){
       super(props)
       this.state = {
        bioText: ''
       }
       }

       componentWillMount(){
           this.setState({  bioText: 'Hover to unlock the secrets of the Gods'})
         }
         
         
         
           poseidonhoverBio = (props) => {
              this.setState({ bioText: 'Poseidon was god of the sea, earthquakes, storms, and horses and is considered one of the most bad-tempered, moody and greedy Olympian gods. He was known to be vengeful when insulted.  He is the son of Cronus and Rhea and was swallowed by his father along with Hades, Demeter, Hestia and Hera.'}) 
              }
         
              poseidonhoverLeave = (props) => {
                this.setState({bioText :"Hover to unlock the secrets of the Gods"})
              }
              render(){
return(
    <div style = {{opacity: this.poseidonhoverBio ? 1 : 0, color: this.zeushoverBio ? 'light' : 'lightcyan'}} onMouseEnter = {this.poseidonhoverBio}  onMouseLeave = {this.poseidonhoverLeave}  className = 'section2'>

     <h1 className= 'title2'> Poseidon: God of the sea  </h1>
     <img className = 'poseidon' alt = 'Poseidon' src='https://vignette.wikia.nocookie.net/unnaturalworld/images/4/47/Poseidon_God_of_the_Seas.jpg/revision/latest?cb=20171027034757'/>
           <div className ='biodiv2'>
             <h1 style = {{opacity: this.poseidonhoverBio ? 0.5 : 1}} className = 'bio2'>{this.state.bioText} </h1>
              </div>
          
    
         
    
     </div>
)
}
   }


class Hades extends Component {
    constructor(props){
        super(props)
        this.state = {
         bioText: ''
        }
        }
 
        componentWillMount(){
            this.setState({  bioText: 'Hover to unlock the secrets of the Gods'})
          }
          
          
          
            hadeshoverBio = (props) => {
               this.setState({ bioText: 'Hades was the god of the underworld and the name eventually came to also describe the home of the dead as well. He was the oldest male child of Cronus and Rhea. Hades and his brothers Zeus and Poseidon defeated their father and the Titans to end their reign, claiming rulership over the cosmos.'}) 
               }
          
               hadeshoverLeave = (props) => {
                 this.setState({bioText :"Hover to unlock the secrets of the Gods"})
               }
               render(){
    return(
        <div onMouseEnter = {this.hadeshoverBio} onMouseLeave = {this.hadeshoverLeave} className = 'section3'>
           
        <h1 className= 'title3'>Hades: Lord of the Underworld </h1>
           <img className = 'hades' alt = 'Hades' src='https://vignette.wikia.nocookie.net/dresdenfiles/images/a/ad/Hades_small_by_jasonengle-dattd4i.jpg/revision/latest?cb=20170730081532'/>
        <div className ='biodiv3'>
        <h1 style = {{opacity: this.hadeshoverBio ? 1 : 0, color: this.hadeshoverBio ? 'white' : 'lightblue' }} className = 'bio3'>{this.state.bioText} </h1>
         </div>   
            </div>
    )
    }
}

class Aphrodite extends Component{
    constructor(props){
        super(props)
        this.state = {
         bioText: ''
        }
        }
 
        componentWillMount(){
            this.setState({  bioText: 'Hover to unlock the secrets of the Gods'})
          }
          
          
          
            aphroditehoverBio = (props) => {
               this.setState({ bioText: 'Aphrodite is the Goddess of Love and Beauty and according to Hesiod’s Theogony, she was born from the foam in the waters of Paphos, on the island of Cyprus. She supposedly arose from the foam when the Titan Cronus slew his father Uranus and threw his genitals into the sea.'}) 
               }
          
               aphroditehoverLeave = (props) => {
                 this.setState({bioText :"Hover to unlock the secrets of the Gods"})
               }
               render(){
    return(
        <div onMouseEnter = {this.aphroditehoverBio} onMouseLeave = {this.aphroditehoverLeave} className = 'section4'>
        <h1 className= 'title4'> Aphrodite: Goddess of Love </h1>
        <img className = 'aphrodite' alt = 'Aphrodite' src='http://www.greekboston.com/wp-content/uploads/2014/10/87821072.jpg'/>
        <div  className ='biodiv4'>
        <h1 style = {{opacity: this.aphroditehoverBio ? 1 : 0, color: this.aphroditehoverBio ? 'lightcoral' : 'grey' }} className = 'bio4'>{this.state.bioText} </h1>
         </div>   
       </div>
    )
    }
}

class Artemis extends Component{
  constructor(props){
    super(props)
    this.state = {
      bioText: ''
     }
     }

     componentWillMount(){
         this.setState({  bioText: 'Hover to unlock the secrets of the Gods'})
       }
       
       
       
         artemishoverBio = (props) => {
            this.setState({ bioText: 'Artemis is known as the goddess of the hunt and is one of the most respected of all the ancient Greek deities. It is thought that her name, and even the goddess herself, may even be pre-Greek. She was the daughter of Zeus, king of the gods, and the Titaness Leto and she has a twin brother, the god Apollo.'}) 
            }
       
            artemishoverLeave = (props) => {
              this.setState({bioText :"Hover to unlock the secrets of the Gods"})
            }
            render(){
 return(
     <div onMouseEnter = {this.artemishoverBio} onMouseLeave = {this.artemishoverLeave} className = 'section5'>
     <h1 className= 'title5'>Artemis: Goddess of the Hunt </h1>
     <img className = 'artemis' alt = 'Artemis' src='http://majorolympians.com/Artemis01L.jpg'/>  
     <div  className ='biodiv5'>
     <h1 style = {{opacity: this.artemishoverBio ? 1 : 0.5, color: this.artemishoverBio ? 'red' : 'lightblue' }} className = 'bio5'>{this.state.bioText} </h1>
      </div>   
      </div>
 )
 }
}

export {Zeus, Poseidon, Hades, Aphrodite, Artemis}