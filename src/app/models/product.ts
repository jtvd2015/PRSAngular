export class Product {
         Id: number;
         VendorsId: number;
         VendorPartNumber: string;
         Name: string;
         Price: number;
         Unit: string;
         Active: boolean;

         constructor(Id: number, VendorsId: number, VendorPartNumber: string, Name: string, Price: number, Unit: string,  Active: boolean) {
           this.Id = Id;
           this.VendorsId = VendorsId;
           this.VendorPartNumber = VendorPartNumber;
           this.Name = Name;
           this.Price = Price;
           this.Unit = Unit;
           this.Active = Active;
         }
       }
