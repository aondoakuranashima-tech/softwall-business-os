export interface InboxNotification{id:string;userId:string;title:string;body:string;read:boolean;createdAt:string;}
export function markRead(n:InboxNotification):InboxNotification{return {...n,read:true};}
