import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./employee.scss";
import  {service}   from './employee.service';

class Employee extends React.Component<any, any> {
    columnDefs: any = [];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
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
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">employee</h2>
        <div>
    <div id="template-io7c">
        <div id="template-isj4">
            <div id="i2b2">
                <div id="template-isq9" removeButton="" className="ag-theme-material"
                style={{height: '500px', width: '100%'}}>
                    <AgGridReact columnDefs={this.columnDefs} pagination={true} onGridReady={this.onGridReady}
                    paginationPageSize={5} domLayout={ "autoHeight"} animateRows={true}defaultColDef={{sortable:
                    true, filter: true }} rowData={this.state.rowData} rowSelection={
                    "single"} onRowSelected={this.onRowSelected }></AgGridReact>
                </div>
                <div id="template-indm" className="gjs-row">
                    <div id="template-icdg" className="gjs-cell">
                        <div type="button" id="template-idgv" className="btn btn-primary "></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Employee;