
 export const sortByAmount=()=>({
    type:"SortBy_AMOUNT",
  });
  
  export const sortByDate=()=>({
    type:"SortBy_Date"
  });
  
  
  export const sortByStartDate=(date)=>({
    type:"SORTBY_STARTDATE",
    date:date
  });
  
  export const sortByEndDate=(date)=>({
    type:"SORTBY_ENDDATE",
    date:date
  });
  
  export const sortBy=(sortBy)=>({
    type:"SORT_BY",
    sortBy
  });

  export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });

 