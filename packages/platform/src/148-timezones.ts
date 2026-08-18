export function isValidTimezone(timezone:string):boolean{try{new Intl.DateTimeFormat('en',{timeZone:timezone}).format();return true}catch{return false}}
