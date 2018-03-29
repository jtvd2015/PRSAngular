export class PurchaseRequestLineItem {
         Id: number;
         PurchaseRequestsId: number;
         ProductsId: string;
         Quantity: string;
         Active: string;

         constructor(Id: number, PurchaseRequestsId: number, ProductsId: string, Active: string, Quantity: string) {
           this.Id = Id;
           this.PurchaseRequestsId = PurchaseRequestsId;
           this.ProductsId = ProductsId;
           this.Active = Active;
           this.Quantity = Quantity;
         }
       }
