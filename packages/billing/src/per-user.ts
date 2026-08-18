export interface SeatCharge { organizationId: string; period: string; seats: number; unitAmount: number; currency: string; }
export function calculateSeatCharge(input: SeatCharge): number { if (!Number.isInteger(input.seats) || input.seats < 1 || input.unitAmount < 0) throw new Error('INVALID_SEAT_CHARGE'); return input.seats * input.unitAmount; }
