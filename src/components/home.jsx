import React from 'react'
 function Home(){
     return(
         <div>
 <div id="banner" className="banner full-screen-mode parallax">
      <div className="container pr">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="banner-static">
            <div className="banner-text">
              <div className="banner-cell">
                <h1>Dinner with us  <span className="typer" id="some-id" data-delay={200} data-delim=":" data-words="Friends:Family:Officemates" data-colors="red" /><span className="cursor" data-cursordisplay="_" data-owner="some-id" /></h1>
                <h2>Accidental appearances </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod</p>
                <div className="book-btn">
                  <a href="#reservation" className="table-btn hvr-underline-from-center">Book my Table</a>
                </div>
                <a href="#about">
                  <div className="mouse" />
                </a>
              </div>
              {/* end banner-cell */}
            </div>
            {/* end banner-text */}
          </div>
          {/* end banner-static */}
        </div>
        {/* end col */}
      </div>
      {/* end container */}
    </div>
         </div>
     );
 }
 export default Home;