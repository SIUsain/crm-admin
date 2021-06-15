import React from 'react';

const Toaster = React.lazy(() => import('../components/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('../components/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('../components/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('../components/base/cards/Cards'));
const Carousels = React.lazy(() => import('../components/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('../components/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('../components/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('../components/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('../components/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('../components/base/navbars/Navbars'));
const Navs = React.lazy(() => import('../components/base/navs/Navs'));
const Paginations = React.lazy(() => import('../components/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('../components/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('../components/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('../components/base/switches/Switches'));

const Tabs = React.lazy(() => import('../components/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('../components/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('../components/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('../components/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('../components/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('../components/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('../components/charts/Charts'));
const Stats = React.lazy(() => import('../components/charts/Stats'));
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('../components/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('../components/icons/flags/Flags'));
const Brands = React.lazy(() => import('../components/icons/brands/Brands'));
const Alerts = React.lazy(() => import('../components/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('../components/notifications/badges/Badges'));
const Modals = React.lazy(() => import('../components/notifications/modals/Modals'));
const Colors = React.lazy(() => import('../components/theme/colors/Colors'));
const Typography = React.lazy(() => import('../components/theme/typography/Typography'));
const Widgets = React.lazy(() => import('../components/widgets/Widgets'));
const Users = React.lazy(() => import('../components/users/Users'));
const User = React.lazy(() => import('../components/users/User'));
const Sliders = React.lazy(() => import('../components/sliders/Sliders'));
const Slider = React.lazy(() => import('../components/sliders/Slider'));
const SliderAdd = React.lazy(() => import('../components/sliders/SliderAdd'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/stats', name: 'Stats', component: Stats },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/sliders', exact: true,  name: 'Sliders', component: Sliders },
  { path: '/sliders/add', exact: true,  name: 'Slider Add', component: SliderAdd },
  { path: '/sliders/:id', exact: true, name: 'Slider Details', component: Slider }
];

export default routes;
