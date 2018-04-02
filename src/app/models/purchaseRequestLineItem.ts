export class PurchaseRequestLineItem {
         Id: number;
         PurchaseRequestsId: number;
         ProductsId: string;
         Quantity: number;
         Active: boolean;

         constructor(Id: number, PurchaseRequestsId: number, ProductsId: string, Active: boolean, Quantity: number) {
           this.Id = Id;
           this.PurchaseRequestsId = PurchaseRequestsId;
           this.ProductsId = ProductsId;
           this.Active = Active;
           this.Quantity = Quantity;
         }
       }
