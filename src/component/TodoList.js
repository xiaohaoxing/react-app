import React, {Component} from 'react'
import {List, Avatar} from 'antd'
import ProjProp from "./properties"
const readTodoUrl = ProjProp.dataAddr + ProjProp.separater + ProjProp.ListTodo;
const readList = async function(){
    let response = await fetch(readTodoUrl);
    let json = await response.text();
    return json;
};
const checkboxStyle={
    width: '20px',
    height: '20px',
    float: 'left',
    margin: '3px',
    borderRadius: '20%',
    border: '3px solid black',
    cursor: 'pointer'
}
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[{text:'加载中'}]
        };
    }
    async componentDidMount(){
        let data = await readList();
        console.log(data);
        data = JSON.parse(data);
        this.setState({list:data});
    }
    render(){
        return(
            <List 
                style={{width:'60%', marginLeft: '20%', marginTop: '32px', border:'1px solid gray'}}
                itemLayout="horizontal" 
                dataSource={this.state.list}
                renderItem={item=>(
                    <List.Item
                        style={{fontSize:'32px'}}
                        
                    >
                        <List.Item.Meta
                            title={<div><div style={checkboxStyle} onClick={this.checkOne}/><p style={{paddingLeft: '1em', fontSize:'30px'}}>{item.text}</p></div>}
                        />
                    </List.Item>
                )}
            />
        );
    }
};
export default TodoList