import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

var PDF = require('react-pdf');

var MyApp = React.createClass({
  render: function() {
    return <PDF file="Jason_Xu_Developer_Resume.pdf" page="1" />
  },
  _onPdfCompleted: function(page, pages){
    this.setState({page: page, pages: pages});
  }
});


class Resume extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    return (
      <div className="resume-link">This is my resume
      <a href="https://drive.google.com/file/d/0B8xOcbOWLhK0ZkhhTHNrTmJnLWs/view?usp=sharing" target="blank">Link</a>
      <object data="Jason_Xu_Developer_Resume.pdf" type="application/pdf" width="100%" height="100%">
        <p>It appears you don't have a PDF plugin for this browser.
        No biggie... you can <a href="Jason_Xu_Developer_Resume.pdf">click here to
        download the PDF file.</a></p>
    </object>
      </div>
    )
  }
}

export default Resume;