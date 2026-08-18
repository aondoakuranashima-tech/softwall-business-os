export interface SeatPlan{includedSeats:number;pricePerSeatMinor:number}
export function seatCharge(activeSeats:number,p:SeatPlan):number{return Math.max(0,activeSeats-p.includedSeats)*p.pricePerSeatMinor;}
