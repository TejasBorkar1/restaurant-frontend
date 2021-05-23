import React from 'react';

function Reservation(){
    return(
        <div>
<div id="reservation" className="reservations-main pad-top-100 pad-bottom-100">
      <div className="container">
        <div className="row">
          <div className="form-reservations-box">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <h2 className="block-title text-center">
                  Reservations			
                </h2>
              </div>
              <h4 className="form-title">BOOKING FORM</h4>
              <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
              <form id="contact-form" method="post" className="reservations-box" name="contactform" action="mail.php">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <input type="text" name="form_name" id="form_name" placeholder="Name" required="required" data-error="Firstname is required." />
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <input type="email" name="email" id="email" placeholder="E-Mail ID" required="required" data-error="E-mail id is required." />
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <input type="text" name="phone" id="phone" placeholder="contact no." />
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <div className="btn-group bootstrap-select"><button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="no_of_persons" title="No. Of persons"><span className="filter-option pull-left">No. Of persons</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="disabled selected"><a tabIndex={-1} className data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="true"><span className="text">No. Of persons</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">1</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">2</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">3</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select name="no_of_persons" id="no_of_persons" className="selectpicker" tabIndex={-98}>
                <option selected disabled>No. Of persons</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select></div>
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <input type="date" name="date-picker" id="date-picker" placeholder="Date" required="required" data-error="Date is required." />
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <input type="time" name="time-picker" id="time-picker" placeholder="Time" required="required" data-error="Time is required." />
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <div className="btn-group bootstrap-select"><button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="preferred_food" title="preferred food"><span className="filter-option pull-left">preferred food</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="disabled selected"><a tabIndex={-1} className data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="true"><span className="text">preferred food</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Indian</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Continental</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Mexican</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select name="preferred_food" id="preferred_food" className="selectpicker" tabIndex={-98}>
                <option selected disabled>preferred food</option>
                <option>Indian</option>
                <option>Continental</option>
                <option>Mexican</option>
              </select></div>
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="form-box">
            <div className="btn-group bootstrap-select"><button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="occasion" title="Occasion"><span className="filter-option pull-left">Occasion</span>&nbsp;<span className="bs-caret"><span className="caret" /></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index={0} className="disabled selected"><a tabIndex={-1} className data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="true"><span className="text">Occasion</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={1}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Wedding</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={2}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Birthday</span><span className="glyphicon glyphicon-ok check-mark" /></a></li><li data-original-index={3}><a tabIndex={0} className data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Anniversary</span><span className="glyphicon glyphicon-ok check-mark" /></a></li></ul></div><select name="occasion" id="occasion" className="selectpicker" tabIndex={-98}>
                <option selected disabled>Occasion</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select></div>
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="reserve-book-btn text-center">
            <button className="hvr-underline-from-center" type="submit" value="SEND" id="submit">BOOK MY TABLE </button>
          </div>
        </div>
        {/* end col */}
      </form>
              {/* end form */}
            </div>
            {/* end col */}
          </div>
          {/* end reservations-box */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
        </div>
    );
}
export default Reservation;