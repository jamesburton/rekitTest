import {
  DefaultPage,
} from './';

export default {
  path: 'staff',
  name: 'Staff',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
