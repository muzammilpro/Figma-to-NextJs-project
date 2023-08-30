// // npm install react-slick
// // npm install slick-carousel --save
// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// export default class MoveCard extends Component {
//     render() {
//         const { card, card2, card3,  } = this.props;
//         var settings = {
//             dots: true,
//             infinite: false,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             initialSlide: 0,
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 3,
//                         infinite: true,
//                         dots: true
//                     }
//                 },
//                 {
//                     breakpoint: 600,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 2,
//                         initialSlide: 2
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//           settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               prevArrow: false, 
//             nextArrow: false, 
//             }
//         }
//     ]
// };
// return (
//     <div>
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>{card}</h3>
//           </div>
//           <div>
//             <h3>{card2}</h3>
//           </div>
//           <div>
//             <h3>{card3}</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }