import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ProductsRoute from './routes/product.route';
import OrderRoute from './routes/order.route';
import AdminAuthRoute from './routes/admin/auth.route';
import AdminUsersRoute from './routes/admin/users.route';
import AdminOrderRoute from './routes/admin/order.route';

validateEnv();

const app = new App([
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new ProductsRoute(),
  new OrderRoute(),
  new AdminAuthRoute(),
  new AdminUsersRoute(),
  new AdminOrderRoute(),
]);

app.listen();
