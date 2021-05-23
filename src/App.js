import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import Menu from './components/menu';
import Team from './components/team';
import Gallery from './components/gallery';
import Blog from './components/blog';
import Pricing from './components/pricing';
import Reservation from './components/reservation';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch  ,Redirect } from 'react-router-dom';
function App() {
  return (
    <div>
    {/* Basic */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* Mobile Metas */}
    <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0" />
    {/* Site Metas */}
    <title>Food Funday Restaurant - One page HTML Responsive</title>
    <meta name="keywords" content />
    <meta name="description" content />
    <meta name="author" content />
    {/* Site Icons */}
    
    {/*[if lt IE 9]>
  
  
<![endif]*/}
    {/* <div id="loader">
      <div id="status" />
    </div> */}
<Router>
<Header />
<div className="container mt-md-4">
<Switch>
<Route path="/" exact component={Home}></Route>
<Route path="/aboutUs" exact component={AboutUs}></Route>
<Route path="/blog" exact component={Blog}></Route>
<Route path="/gallery" exact component={Gallery}></Route>
<Route path="/menu" exact component={Menu}></Route>
<Route path="/reservation" component={Reservation}></Route>
<Route path="/pricing" component={Pricing}></Route>
<Route path="/team" component={Team}></Route>
</Switch>
</div>
<Footer/>
</Router>

 
    {/* end site-header */}
   {/* <Home/> */}
    {/* end banner */}
    {/* <AboutUs /> */}
      {/* end container */}
   
   {/* <Menu/> */}
    {/* end menu */}
    {/* <Team/> */}
    {/* end team-main */}
   
   {  /* <Gallery/> */}
    {/* end gallery-main */}
    {/* <Blog/> */}
    {/* end blog-main */}
   {/* <Pricing/> */}
    {/* end pricing-main */}
    {/* <Reservation/> */}
    {/* end reservations-main */}
   
    {/* end footer-main */}
    <a href="#" className="scrollup" style={{display: 'none'}}>Scroll</a>
    <section id="color-panel" className="close-color-panel">
      <a className="panel-button gray2"><i className="fa fa-cog fa-spin fa-2x" /></a>
      {/* Colors */}
      <div className="segment">
        <h4 className="gray2 normal no-padding">Color Scheme</h4>
        <a title="orange" className="switcher orange-bg" />
        <a title="strong-blue" className="switcher strong-blue-bg" />
        <a title="moderate-green" className="switcher moderate-green-bg" />
        <a title="vivid-yellow" className="switcher vivid-yellow-bg" />
      </div>
    </section>
    {/* ALL JS FILES */}
    {/* ALL PLUGINS */}
  </div>

  );
}

export default App;
