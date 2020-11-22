// import React from "react";
// import data from "../data";

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [...data.products],
//       sortdata: "default"
//     };
//   }

//   changeState = event => {
//     this.setState({ sortdata: event.target.value });
//     this.handleSort();
//   };

//   handleSort = () => {
//     switch (this.state.sortdata) {
//       case "default":
//         this.setState({
//           data: [...data.products]
//         });
//         break;
//       case "low-to-high":
//         this.setState({
//           data: this.sortBy()
//         });
//         break;
//       case "high-to-low":
//         this.setState({
//           data: this.sortBy().reverse()
//         });
//         break;
//       default:
//         this.setState({
//           data: [...data.products]
//         });
//     }
//   };

//   sortBy = () => {
//     return this.state.data.sort((a, b) => {
//       return b.price - a.price;
//     });
//   };

//   render(props) {
//     return (
//       <>
//         <div className="top-header">
//           <span className="sixteenprods">16 Product(s)found</span>
//           <div className="select-options">
//             <p>Order By</p>
//             <select onChange={this.changeState}>
//               <option value="default">Select</option>
//               <option value="low-to-high">Lowest To Highest</option>
//               <option value="high-to-low">Highest To Lowest</option>
//             </select>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Header;
