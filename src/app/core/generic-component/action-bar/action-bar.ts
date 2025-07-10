import { ActionButtonEnum } from "../../enums/action-button";

export interface ActionBarButton {
  Id?: string;
  Title: string;
  Color?: string;
  Icon?: string;
  /**
   * Your type / enum will be stored here.
   * When output event is triggered you will have to check Type and do the oparations accordingly
   */
  Type: ActionButtonEnum;
  NavigateUrl?: string;
}
