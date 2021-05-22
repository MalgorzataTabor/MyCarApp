import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cars from './Cars';
import About from './About';
import AddCar from './AddCar';
import EditCar from'./EditCar';
import Car from './Car';



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Cars} />
      <Route exact path='/about' component={About} />
      <Route exact path='/cars/add' component={AddCar} />
      <Route exact path='/cars/edit/:id' component={EditCar} />
      <Route exact path='/cars/:id' component={Car} />
    </Switch>
  </main>
)

export default Main;