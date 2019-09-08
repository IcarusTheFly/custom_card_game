import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>
            <h3 className="mt-3 border-info border-bottom">About us</h3>
            <div className="row mt-3">
                <div className="col-12">
                    <h4>Who we are</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada dolor risus, at dictum purus eleifend eget. Fusce eleifend at nunc et elementum. Vestibulum non enim arcu. Pellentesque sit amet iaculis augue, ac consectetur sem. Fusce pretium lacinia metus, nec faucibus lectus consectetur vitae. Ut rhoncus fermentum nisi sit amet mollis. Sed lorem justo, imperdiet vitae feugiat a, volutpat quis ipsum. Nam a lobortis sem. Sed eu diam porttitor, rhoncus lectus ut, venenatis velit. Maecenas porttitor vehicula tincidunt. In accumsan ultrices diam, a sodales velit ornare nec. Morbi eu odio finibus, malesuada ipsum nec, tincidunt mi. Proin tincidunt rhoncus libero et fermentum. Nulla sagittis urna eros, id malesuada risus euismod at.</p>
                    <p>Nam viverra neque nec nulla egestas, sed fringilla nibh ornare. Proin eu mauris luctus, condimentum urna vitae, scelerisque arcu. Quisque pellentesque magna diam, quis malesuada urna mollis in. Nulla facilisi. Vivamus mi diam, tempus nec viverra non, rhoncus vitae ante. Integer in pretium odio. Vestibulum quis dolor at ante placerat ornare nec eu mi. Curabitur posuere turpis nulla, eleifend fringilla enim mollis sit amet. Pellentesque pellentesque orci ac nibh vehicula mattis. Nunc arcu dui, feugiat non justo ac, pulvinar pretium erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec augue quis tortor pretium volutpat. Fusce dictum facilisis massa, in cursus ex gravida a. In hac habitasse platea dictumst. In sed ultrices ex, venenatis semper mauris. Sed eget malesuada ligula, eu laoreet lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    <h4>What we do here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada dolor risus, at dictum purus eleifend eget. Fusce eleifend at nunc et elementum. Vestibulum non enim arcu. Pellentesque sit amet iaculis augue, ac consectetur sem. Fusce pretium lacinia metus, nec faucibus lectus consectetur vitae. Ut rhoncus fermentum nisi sit amet mollis. Sed lorem justo, imperdiet vitae feugiat a, volutpat quis ipsum. Nam a lobortis sem. Sed eu diam porttitor, rhoncus lectus ut, venenatis velit. Maecenas porttitor vehicula tincidunt. In accumsan ultrices diam, a sodales velit ornare nec. Morbi eu odio finibus, malesuada ipsum nec, tincidunt mi. Proin tincidunt rhoncus libero et fermentum. Nulla sagittis urna eros, id malesuada risus euismod at.</p>
                    <p>Proin nec malesuada quam, sit amet posuere sapien. Curabitur euismod convallis tempus. Praesent at sem vel lorem porta mattis in et sapien. Donec varius dictum felis non rhoncus. Suspendisse iaculis odio.</p>
                </div>
            </div>
        </div>
    );
}

export default About;