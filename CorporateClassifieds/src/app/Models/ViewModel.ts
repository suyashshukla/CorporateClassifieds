
import { TimeInfo } from "./TimeInfo";
import { AdDetails } from './AdDetails';
import { UserInfo } from './UserInfo';

export class Classified {
  public id: string;
  public title: string;
  public description: string;
  public price: number;
  public thumbnail: string;
  public timeinfo= new TimeInfo();
  public details = new AdDetails();
  public userdata = new UserInfo();
}
