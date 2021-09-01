import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Receitas } from './pages/Receitas';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Receitas} />
      </Switch>
    </BrowserRouter>
  );
}
