export class Vendors {
    Id: number;
    Code: string;
    Name: string;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    Phone: string;
    Email: string;
    IsPreApproved: boolean;
    Active: boolean;

    constructor(Id: number, Code: string, Name: string, Address: string, City: string, State: string, PostalCode: string, Phone: string, Email: string, IsPreApproved: boolean, Active: boolean) {
        this.Id = Id;
        this.Code = Code;
        this.Name = Name;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.PostalCode = PostalCode;
        this.Phone = Phone;
        this.Email = Email;
        this.IsPreApproved = IsPreApproved;
        this.Active = Active;        
    }
}
