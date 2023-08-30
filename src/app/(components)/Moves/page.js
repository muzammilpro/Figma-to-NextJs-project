
// import React, { Component } from "react";
// import Slider from "react-slick";


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{
//           ...style,
//           display: "block",
//           background: "Blue",
//           position: "absolute",
//           left: "88vw", // Adjust this value as needed for your desired positioning
//           top: "-15%",    // Adjust this value to vertically center the arrow
//           transform: "translateY(-50%)", // Vertically center the arrow using translation
//           zIndex: 1,     // Ensure the arrow appears above the slider content
//         }}
//         onClick={onClick}
//       />
        
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "Blue",
//         position: "absolute",
//         left: "80vw", // Adjust this value as needed for your desired positioning
//         top: "-15%",    // Adjust this value to vertically center the arrow
//         transform: "translateY(-50%)", // Vertically center the arrow using translation
//         zIndex: 1,     // Ensure the arrow appears above the slider content
//       }}
//       onClick={onClick}
//       />
//     );
//   }
  
//   export default class Move extends Component {
//     render(props) {
//       const settings = {
//         dots: false,
//         infinite: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//             },
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       };
//       const { card, card2, card3, card4 } = this.props;
//       return (
//         <div>
//           <SamplePrevArrow />
//           <SampleNextArrow />
//           <h2>Custom Arrows</h2>
//           <Slider {...settings} > 
//           {/* className="max-w-3xl mx-auto"  */}
//             <div>
//               <h3>{card}</h3>
//             </div>
//             <div>
//               <h3>{card2}</h3>
//             </div>
//             <div>
//               <h3>{card3}</h3>
//             </div>
//             <div>
//               <h3>{card4}</h3>
//             </div>
//           </Slider>
//         </div>
//       );
//     }
//   }

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue", // Changed to lowercase 'blue' for consistency
        position: "absolute",
        right: "5%", // Adjust this value as needed for your desired positioning
        top: "-7%",   // Vertically center the arrow
        transform: "translateY(-30%)", // Vertically center the arrow using translation
        zIndex: 1,    // Ensure the arrow appears above the slider content
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "blue", // Changed to lowercase 'blue' for consistency
        position: "absolute",
        left: "80%", // Adjust this value as needed for your desired positioning
        top: "-7%",  // Vertically center the arrow
        transform: "translateY(-30%)", // Vertically center the arrow using translation
        zIndex: 1,   // Ensure the arrow appears above the slider content
      }}
      onClick={onClick}
    />
  );
}

export default class Move extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { card, card2, card3, card4 } = this.props;
    return (
      <div >
        {/* Removed redundant arrow components */}
        <Slider {...settings}>
          <div className="px-3" >
            <h3>{card}</h3>
          </div>
          <div className="px-3" >
            <h3>{card2}</h3>
          </div>
          <div className="px-3" >
            <h3>{card3}</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
