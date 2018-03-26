export class Product {
         Id: number;
         VendorId: number;
         VendorPartNumber: string;
         Name: string;
         Price: number;
         Unit: string;
         Active: boolean;
         DateCreated: string;
         DateUpdated: string;
         UserId: number;

         constructor(Id: number, VendorId: number, VendorPartNumber: string, Name: string, Price: number, Unit: string,  Active: boolean, DateCreated: string, DateUpdated: string,UserId: number) {
           this.Id = Id;
           this.VendorId = VendorId;
           this.VendorPartNumber = VendorPartNumber;
           this.Name = Name;
           this.Price = Price;
           this.Unit = Unit;
           this.Active = Active;
           this.DateCreated = DateCreated;
           this.DateUpdated = DateUpdated;
           this.UserId = UserId;
         }
       }
