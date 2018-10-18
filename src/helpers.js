import {Data} from "./config";


export function getItemTemplate(dataArray) {

	 let itemTemplate = {};
	 if (dataArray.length > 0 && Array.isArray(dataArray)) {
		 const originItem = dataArray[0];

		 for (let key in originItem) {
			 itemTemplate = {
				 ...itemTemplate,
				 [key]: '',
			 };
		 }
	 }
	 return itemTemplate
}



export function generateId() {
	return Math.floor(Math.random() * 999999);
}





