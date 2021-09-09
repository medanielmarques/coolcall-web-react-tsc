import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Receitas } from './pages/Receitas';
import { Download } from './pages/Download';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Receitas} />
        <Route path='/download/:id/:municipio' component={Download} />
      </Switch>
    </BrowserRouter>
  );
}
