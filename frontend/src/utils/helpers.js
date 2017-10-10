import moment from 'moment';



export function formatDate(date){
    return moment.unix(date).format("DD/MM/YYYY");

    // return moment(moment.unix(date).format("MM/DD/YY")).fromNow();
}

export function dateNow() {
    return moment().unix();
}

export function url(param) {

    return 'http://localhost:3001/'+param;
}

export function uuid() {

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        // return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        //     s4() + '-' + s4() + s4() + s4();

    return s4()+s4()+s4()+s4();

}