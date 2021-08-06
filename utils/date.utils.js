import moment from 'moment';

export const dateToString = (date) => {
	return moment(date).format("YYYY/MM/DD - h:mm:ss A");
}