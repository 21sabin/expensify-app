import moment from 'moment';
export default (expenses,{text,sortBy,startDate,endDate})=>{
  console.log(sortBy,"in selector")
    return expenses.filter((expenses)=>{
     
      const createdAt=moment(expenses.createdAt);
      const startDate=startDate ? startDate.isSameOrBefore(createdAt):true;
      const endDate=endDate ? endDate.isSameOrAfter(createdAt):true;
      const textMatch=expenses.description.toLowerCase().includes(text.toLowerCase())
      return startDate && endDate && textMatch;
    }).sort((a,b)=>{
        if(sortBy==="date"){
          return a.createdAt > b.createdAt?-1:1
        }else if(sortBy==="amount"){
            return a.amount >b.amount ?-1:1;
        }
    });
  }