export class PurchaseRequest {
         Id: number;
         UsersId: number;
         Description: string;
         Justification: string;
         DeliveryMode: string;
         Status: string;
         Total: number;
         Active: boolean;
         ReasonForRejection: string;
         DateCreated: number;

         // tslint:disable-next-line:max-line-length
         constructor(Id: number, UsersId: number, Description: string, Justification: string, DeliveryMode: string, Status: string, Total: number, Active: boolean, ReasonForRejection: string) {
           this.Id = Id;
           this.UsersId = UsersId;
           this.Description = Description;
           this.Justification = Justification;
           this.DeliveryMode = DeliveryMode;
           this.Status = Status;
           this.Total = Total;
           this.Active = Active;
           this.ReasonForRejection = ReasonForRejection;
         }
       }
