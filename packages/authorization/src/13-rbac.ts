export interface Role{name:string;permissions:string[]}
export function hasRolePermission(role:Role,permission:string):boolean{return role.permissions.includes('*')||role.permissions.includes(permission);}
