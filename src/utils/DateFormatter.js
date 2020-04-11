import moment from 'moment';

function DateFormat(datetime) {
    return moment(datetime).format("DD-MM-YYYY h:mm:ss");
}