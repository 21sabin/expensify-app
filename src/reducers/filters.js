// Filters Reducer
import moment from 'moment';
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  
 export default (state = filtersReducerDefaultState, action) => {
   console.log(action,"filter action")
    switch (action.type) {
      case "SET_TEXT_FILTER":
        return {
          ...state,
          text:action.text
        }
        case "SortBy_AMOUNT":
          return {
            ...state,
          }
          case "SORTBY_STARTDATE":
          return {
            ...state,
            startDate:action.date
          }
          case "SORT_BY":
          return {
            ...state,
            sortBy:action.sortBy
          }
          case "SORTBY_ENDDATE":
          return {
            ...state,
            endDate:action.date
          }
      default:
        return state;
    }
  };