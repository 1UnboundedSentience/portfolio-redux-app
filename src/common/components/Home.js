import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {
  //const Home = getHome();
  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">
  			<div className="post banner">
			    <h1 className="post-title">My name is Jason. I build <em>scalable</em>, <em>maintainable</em> and <em>responsive</em> web applications.</h1>
    			<p>for <em>agencies</em>, <em>individuals</em>, <em>start-ups</em> and sometimes, <em>myself</em>. <a href="#" onClick={this.eventToggleSidebar}> Find out More</a></p>
          <div className="profile-pic"></div>
          <a href="https://resume.creddle.io/embed/1qipny5ai44" target="blank">My Resume</a>
			  </div>
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em>Backbone</em></li>
						<li><em><b>*</b><b>*</b>React</em>
							<ul>
								<li><em><b>*</b>Redux</em></li>
								<li><em>Flux</em></li>
							</ul>
						</li>
						<li><em>D3</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side CRUD</h4>
					<ul>
						<li><em>MySql</em></li>
						<li><em><b>*</b>PostgreSQL</em>
							<ul>
								<li><em><b>*</b>MongoDB</em></li>
								<li><em>SQL</em></li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Test Driven Development</h4>
					<ul>
						<li><em>Rspec</em></li>
						<li><em>Capybara</em></li>
						<li><em>Factory Girl</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b>*</b>Heroku</em></li>
						<li><em><b>*</b>Dreamhost</em></li>
						<li><em>Gulp</em></li>
						<li><em>Grunt</em></li>
					</ul>
				</div>

				<div className="exclaimation">
					<em><b>*</b> Check out my Github repo here: <a href="https://github.com/1UnboundedSentience"></a>.</em><br/>
				</div>

  			</div>


  			<div className="post clearfix">
  				<h2>Companies I have worked with:</h2>
  				<ul className="clients">
  					<li className="hertz-logo">Hertz Rent-a-car management training</li>
  					<li className="terasem-logo">Terasem Movement Inc.</li>

  				</ul>
			  </div>

			<Banner />

  		</div>

    );
  }
}

export default Home;