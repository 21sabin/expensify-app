import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do YYYY'));

export class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? props.expense.amount : 0,
            note: props.expense ? props.expense.note : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ""

        }

    }


    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            console.log(amount, "amount")
            this.setState(() => ({ amount }));
            console.log(this.state.amount)
        }
        console.log(this.state.amount, "outside")
    };

    handleNote = (e) => {
        e.persist();
        this.setState(() => ({
            note: e.target.value
        }))
    }

    handleSubmit = (e) => {
        //for avoiding full page refresh
        e.preventDefault();
        console.log(this.state.description)
        if (!this.state.description || !this.state.amount) {
            console.log("error")
            this.setState({ error: "please select description and amount" })
            console.log(this.state.error)
        } else {
            this.setState({ error: "" });
            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount,
                createdAt: this.state.createdAt,
                note: this.state.note
            })

        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
        console.log(this.state.createdAt.valueOf())

    };
    onFocusChange = ({ focused }) => {
        console.log(focused, "focused")
        this.setState(() => ({ calendarFocused: focused }));
    };


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.handleDescription}
                    />
                    <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange} /><br />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea type="text" value={this.state.note} onChange={this.handleNote}></textarea><br />
                    <button type="submit">Add Espense</button>
                </form>


            </div>
        )
    }
}

