import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./addemployee.scss";
import  {service}   from './addemployee.service';

class Addemployee extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    employeetable : {
    name: '',
    age: '',
    salary: '',
    email: '',
    },
    
    rowData :[]
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ employeetable: { ...this.state.employeetable, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.employeetable.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">addemployee</h2>
        <div id="template-ignw">
    <div id="template-in2c" className="gjs-row">
        <div id="template-i16k" className="gjs-cell">
            <input type="text" id="template-i173" className="form-control " />
        </div>
        <div id="template-idy9" className="gjs-cell">
            <input type="text" id="template-iscq" className="form-control " />
        </div>
        <div id="template-iu8o" className="gjs-cell">
            <input type="text" id="template-ib61" className="form-control " />
        </div>
    </div>
    <div id="template-ihsp" className="gjs-row">
        <div id="template-ir28" className="gjs-cell">
            <div type="button" id="template-ix786" className="btn btn-primary ">add employee</div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Addemployee;