export interface InvoiceLine { description: string; quantity: number; unitAmount: number; }
export interface Invoice { id: string; organizationId: string; currency: string; lines: InvoiceLine[]; status: 'draft' | 'open' | 'paid' | 'void'; }
export function invoiceTotal(invoice: Invoice): number { return invoice.lines.reduce((sum, line) => { if (line.quantity < 0 || line.unitAmount < 0) throw new Error('INVALID_INVOICE_LINE'); return sum + line.quantity * line.unitAmount; }, 0); }
