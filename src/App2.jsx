import React, { Component } from 'react'
import './App2.css'

export default class App2 extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            loading :true
        }
    }
    handleData =(btntype)=>{
        

        if(btntype === "fakestoreproducts"){
             fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(res =>{
            console.log(res, "data")
            this.setState({data:res,loading:false})

        })


    }else if(btntype=== "dummyjsonproducts"){
         fetch('https://dummyjson.com/products').then(res=>res.json()).then(res =>{
            console.log(res, "data")
            this.setState({data:res.products,loading:false})

    })

}else if(btntype === "dummyjsonrecipes"){

    fetch('https://dummyjson.com/recipes').then(res=>res.json()).then(res =>{
            console.log(res, "data")
            this.setState({data:res.recipes,loading:false})

    })

}else{
    return;
}
    }
   
  render(){
    return (
      <div id='App2'>
        <div id='app2_child1'>
            <button onClick={()=>this.handleData("fakestoreproducts")}>fakeproducts</button>
            <button  onClick={()=>this.handleData("dummyjsonproducts")}>dummyjsonproducts</button>
            <button  onClick={()=>this.handleData("dummyjsonrecipes")}>dummyjsonrecipes</button>
        </div>
        <div id="app2_child2">
          {this.state.loading ? "please choose the category you want!": this.state.data.map((s)=>{
            return(
                <>
                <img src={s.image || s.thumbnail} width={200}/>
                <h1>{s.title || s.name}</h1>
                </>
            )
          })}
        </div>
      </div>
    )
  }
}
