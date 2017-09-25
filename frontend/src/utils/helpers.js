import moment from 'moment';



export function formatDate(date){
    // return moment.unix(date).format("MM/DD/YY");
    return moment(moment.unix(date).format("MM/DD/YY"), "YYYYMMDD").fromNow();
}

export function url(param) {
    return 'http://localhost:3001/'+param;
}