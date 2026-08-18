export type NotificationChannel='email'|'sms'|'push'|'in_app'|'webhook';
export interface NotificationPreference { userId:string; category:string; channel:NotificationChannel; enabled:boolean; }
export function isEnabled(p:NotificationPreference):boolean{return p.enabled;}
