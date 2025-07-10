import { Routes } from '../../core/classes/routes';
import { ContainerConfig } from '../../core/generic-component/common-container/container-config';

export const HomeConfig: ContainerConfig = {
  ListViewTitle: 'Dashbaord',
  Title: ' Dashbaord',
  ListViewPath: `${Routes.HOME}`,
  ActionBarLeftButtons: [],
  ActionBarRightButtons: [],
  IsSearchBarEnable: true,
  IsListGridToggle: false,
  IsDefaultDetailView: false,
  IsDefaultGridView: false,
};
