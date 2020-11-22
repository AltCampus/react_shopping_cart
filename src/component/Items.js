// import React from "react";
// import data from "../data";

// class Items extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [...data.products]
//     };
//   }
//   render(props) {
//     return (
//       <>
//         {this.state.data.map(item => (
//           <div className="flex1">
//             <img
//               className="item-images"
//               src={`static/products/${item.sku}_1.jpg`}
//               alt=""
//             />
//             <div className="free-box">
//               <h4 className="free-shipping">Free Shippping</h4>
//             </div>
//             <div className="price-details">
//               <h2 className="description">{item.title}</h2>
//               <hr className="tiny-hr"></hr>
//               <h4 className="real-price">
//                 <span className="price">{item.currencyFormat}</span>
//                 <span className="the-highlighted-price">{item.price}</span>
//               </h4>

//               <h4 className="another-price">
//                 <span className="price2">or {item.installments}</span>
//                 <span className="other-half">x$1.21</span>
//               </h4>
//               <button className="addtocart">Add To Cart</button>
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// export default Items;
