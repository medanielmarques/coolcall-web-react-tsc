import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ReceitasHome } from 'pages/Guarulhos/ReceitasHome';
import { ReceitasDownload } from 'pages/Guarulhos/ReceitasDownload';
import { Home } from 'pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/guarulhos/receitas/home' component={ReceitasHome} />
        <Route
          path='/guarulhos/receitas/download'
          component={ReceitasDownload}
        />
      </Switch>
    </BrowserRouter>
  );
}
