import { ActionBarButton } from '../action-bar/action-bar';

export interface ContainerConfig {
  ListViewTitle: string;
  Title?: string;
  ListViewPath: string;
  DetailViewPath?: string;
  ActionBarLeftButtons: ActionBarButton[];
  ActionBarRightButtons: ActionBarButton[];
  IsSearchBarEnable: boolean;
  IsListGridToggle: boolean;
  IsDefaultGridView: boolean;
  IsDefaultDetailView: boolean;

  //New
  DetailViewMode?: ContainerDetailViewModeEnum;
  FilterConfig?: FilterConfig[];
}

export type FilterConfig = {
  Name: string;
  Placeholder: string;
  MasterField: string;
  NoData: string;
};

export enum ContainerDetailViewModeEnum {
  New = 'New',
  Edit = 'Edit',
  View = 'View',
}
