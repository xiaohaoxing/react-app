import React from "react"
import {Steps, Button, message} from "antd"
import 'antd/dist/antd.css';
const Step = Steps.Step;

let placeholder = [{
    title:"Step1",
    description:"The First"
},{
    title:"Step2",
    description:"The Second"
},{
    title:"Step3",
    description:"The Third"
}];
const readData = async function getSteps(url){
    let response = await fetch(url);
    let json = await response.text();
    return json;
}
class Progress extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current: 0,
            steps: placeholder,
            // steps: readData("http://localhost:8080/steps"),
        };
        // this.load = this.load.bind(this);
    }
    next(){
        const current = this.state.current + 1;
        this.setState({current});
    }
    prev(){
        const current = this.state.current - 1;
        this.setState({current});
    }
    componentDidMount(){
        let data = await readData("http://localhost:8080/steps");
        data = JSON.parse(data);
        this.setState({steps:data});
    }
    render(){
        const current = this.state.current;
        const steps = this.state.steps;
        debugger;
        return(
            <div>
                <Steps current={current} style={{width:90+"%"}}>
                    {steps.map(i=><Step key={i.title} title={i.title} description={i.description}/>)}
                </Steps>
                <div className="steps-content" style={{padding:10}}>{steps[this.state.current].description}</div>
                <div className="steps-btns">
                {
                    this.state.current < steps.length - 1
                    &&
                    <Button type="primary" onClick={()=>this.next()}>Next</Button>
                }
                {
                    this.state.current === steps.length - 1
                    &&
                    <Button type="primary" onClick={()=>message.success("Finished!")}>Done</Button>
                }
                {
                    this.state.current > 0
                    &&
                    <Button type="primary" style={{marginLeft:8}} onClick={()=>this.prev()}>Previous</Button>
                }

                </div>
            </div>
        );
    }
};
export default Progress 