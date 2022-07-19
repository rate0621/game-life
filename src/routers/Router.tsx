import TagDetailPage from "components/pages/TagDetailPage";
import TopPage from "components/pages/TopPage";
import { memo } from "react";
import { Route, Switch } from "react-router-dom";


export const Router: React.FC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <TopPage />
            </Route>
            <Route path="/tag">
                <TagDetailPage />
            </Route>
        </Switch>
    );
});
