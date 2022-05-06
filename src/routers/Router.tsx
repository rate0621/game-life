import { memo } from "react";
import { Route, Switch } from "react-router-dom";


export const Router: React.FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <p>TOPページです</p>
      </Route>
      <Route path="/tag">
        <p>タグ一覧ページ</p>
      </Route>
    </Switch>
  );
});
