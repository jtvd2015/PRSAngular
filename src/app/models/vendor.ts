export class Vendor {
    Id: number;
    Code: string;
    Name: string;
    Address: string;
    City: string;
    State: string;
    PostalCode: string;
    Phone: string;
    Email: string;
    IsPreapproved: boolean;
    Active: boolean;
    DateCreated: string;
    DateUpdated: string;
    UserId: number;

    constructor(Id: number, Code: string, Name: string, Address: string, City: string, State: string, PostalCode: string, Phone: string, Email: string, IsPreapproved: boolean, Active: boolean, DateCreated: string, DateUpdated: string, UserId: number) {
        this.Id = Id;
        this.Code = Code;
        this.Name = Name;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.PostalCode = PostalCode;
        this.Phone = Phone;
        this.Email = Email;
        this.IsPreapproved = IsPreapproved;
        this.Active = Active;
        this.DateCreated = DateCreated;
        this.DateUpdated = DateUpdated;
        this.UserId = UserId;
    }
}
