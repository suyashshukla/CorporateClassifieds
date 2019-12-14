import { UserInfo } from './UserInfo';
import { AdDetails } from './AdDetails';
import { Classified } from './ViewModel';

export class Offers {
  public id: number;
  public amount: number;
  public comments: string;
  public timestamp: string;
  public userData: UserInfo = new UserInfo();
  public adData: Classified = new Classified();
}
