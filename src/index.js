import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import fastClick from 'fastclick'
import ErrorBoundary from './utils/errorBoundary'
import LanguageView from './utils/Language'
import asyncComponent from './utils/dynamicImport'
import ProviderAlive from './utils/ProviderAlive'
// import KeepAlive from './utils/KeepAlive'
import Keep1 from './views/keepAlive1'
import Keep2 from './views/keepAlive2'
import 'react-app-polyfill/ie9';//兼容ie9
import 'react-app-polyfill/stable';
import "core-js/es/map"
import "core-js/es/set"
import './index.css';


const T1 = lazy(() => import(/* webpackChunkName:"T1" */'./views/test1'))
const T2 = lazy(() => import(/* webpackChunkName:"T2" */'./views/test2'))
const T3 = lazy(() => import(/* webpackChunkName:"T3" */'./views/test3'))
const T4 = lazy(() => import(/* webpackChunkName:"T4" */'./views/test4'))
const Language = lazy(() => import(/* webpackChunkName:"Language" */'./views/language'))
const Error = lazy(() => import(/* webpackChunkName:"errorPage" */'./views/errorPage'))
const DynamicPage = asyncComponent(() => import(/* webpackChunkName:"dynamic" */'./views/dynamic'))
const KeepAlive = lazy(() => import(/* webpackChunkName:"keepAlive" */'./utils/KeepAlive'))
const Keep3 = lazy(() => import(/* webpackChunkName:"keep3" */ './views/keepAlive3'))

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk
  )
)

fastClick.attach(document.body)

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <LanguageView>
        <Router>
          <Switch>
            <ProviderAlive>
              <Route path="/DynamicPage" component={DynamicPage} />
              <Suspense fallback={<div>loading....</div>}>
                <Route path="/keep1" render={props => (
                  <KeepAlive name="keep1">
                    <Route path="/" component={Keep1} />
                  </KeepAlive>
                )} />
                <Route path="/keep2" render={props => (
                  <KeepAlive name="keep2">
                    <Route path="/" component={Keep2} />
                  </KeepAlive>
                )} />
                <Route path="/keep3" component={Keep3} />
                <Route path="/test1" component={T1} />
                <Route path="/error" component={Error} />
                <Route path="/language" component={Language} />
                <Route path="/test2" render={(props) =>
                  <T2 {...props}>
                    <Switch>
                      <Route path="/test2/test3" component={T3} />
                      <Route path="/test2/test4" component={T4} />
                    </Switch>
                  </T2>
                } />
              </Suspense>
            </ProviderAlive>
          </Switch>
        </Router>
      </LanguageView>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);

