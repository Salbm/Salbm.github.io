
import React from "react";

console.log('hi')

//I seriously have no idea why I made this, I was learning react I guess
//Arrow is like funpro, we don't have this. for things. So like, ig if you want actually mutable stuff use function!!!
//uh, i just kinda hope it works
let Permute=(string)=>{
    if (string.length < 2 ){
        return string
      }
    
      let permutationsArray = [] 
       
      for (let i = 0; i < string.length; i++){
        let char = string[i]
    
        if (string.indexOf(char) != i)
        continue
    
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
    
        for (let permutation of Permute(remainingChars)){
          permutationsArray.push(char + permutation) }
      }
      return permutationsArray
}

let hllwrld = ['H', 'e', 'l', 'l','o', ' ', 'W', 'o', 'r', 'l', 'd', '!'];
let hll = ['H', 'e', 'l', 'l','o', '', 'W', 'o', 'r', 'l', 'd', '!']
let shorter = ['J','P','M'];
let something2 = hll.join('');
let shorter2 = shorter.join('');

class Atrocity extends React.Component{

    
    constructor (props){
        //call constructor of its parent class, uh makes it available across the component if u do like this.props
        super(props);
        this.state = { //!!!! states => variables in a sense, that have info/data by themselves, not like actual "states" if that makes sense
            results: [[]],
            jesuschrist: Permute(shorter2),
            length: 0,
            isShow: false}
            this.change_click = this.change_click.bind(this);
            this.get_results= this.get_results.bind(this);
    }


    change_click(){
        this.setState({isShow:true})
        this.get_results()
    }

    get_results(){
        let x = hellobogoogiesorting(shorter);
        this.update_from_pool(x)
        this.setState({results: [this.state.results,x]})
    }

    update_from_pool(x){

        let curr = [this.state.jesuschrist]
        for(let i = 0; i < this.state.jesuschrist.length;i++){
            if(this.state.jesuschrist[i] == x){
                curr[i].splice(i,1)
                this.setState({jesuschrist: curr});
                break
            }

        /*let curr = [this.state.jesuschrist]
        let index = curr.indexOf(x)
        console.log(index)
        if(index !== -1){
            curr.splice(index,1)
            this.setState({jesuschrist: curr});
        }
        omg so funnyyyy indexof doesn't work w 2d arrays heheheheh
        */
    }

    this.update_length(curr)
}

update_length(current_arr){
        this.setState({length: this.state.jesuschrist.length - current_arr.length});
}

render(){

    return (<div id = "Display">
        <button onClick = {this.change_click}>Run bogosort</button>
            {this.state.isShow && <p>{this.state.results}</p>}   
            Uh theres only, {this.state.length}  possibilities left don't give up 
            </div>);
}

}



let hellobogoogiesorting=(x)=>{
    let res = [];
    while(res != x){
    x.sort(() => 0.5 - Math.random());
    for(let i = 0; i< x.length; i++){
        res.push(<Print value ={x[i]} key = {i}/>);
    }
    return res;
}

}




const Print = props =>{
    return <div>
        {props.value}
        <script>
        
        </script>
        </div>;
    
};


export default Atrocity;