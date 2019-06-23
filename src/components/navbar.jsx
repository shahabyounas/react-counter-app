import React from "react";

// This is stateless functional component (It has no states or handlers)
// convert this classs into function
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

const NavBar = ({ totalCounters }) => {
  console.log("NavBar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="www.google.com">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
