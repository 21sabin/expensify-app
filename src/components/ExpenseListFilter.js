import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter,sortByDate,sortBy, sortByEndDate,sortByStartDate } from '../actions/filter';
import { DateRangePicker  } from 'react-dates';
import moment from 'moment'

 class ExpenseListFilter extends React.Component{
    state={
        calenderFocus:null
    }

    handleOnFocusChange=(calenderFocus)=>{
        this.setState(()=>({
            calenderFocus
        }))
    }

    handleDateChange=({startDate,endDate})=>{
        console.log(startDate,endDate,"handle Date change")
        this.props.dispatch(sortByStartDate(startDate));
        this.props.dispatch(sortByEndDate(endDate));
    }

    render(){
        return (

            <div>
                <input type="text" value={this.props.filter.text} onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value))
                }}
                    />
                <select name="option" onChange={(e)=>{
                    if(e.target.value==="date"){
                        this.props.dispatch(sortBy(e.target.value))
                    }else if(e.target.value==="amount"){
                        this.props.dispatch(sortBy(e.target.value))
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.handleDateChange}
                    focusedInput={this.state.calenderFocus}
                    onFocusChange={this.handleOnFocusChange}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                    numberOfMonths={1}
                />
            </div>
        );
    }
}


const mapStoreToProp=(state)=>{
    return {
        filter:state.filters
    }
}   

export default connect(mapStoreToProp)(ExpenseListFilter)

