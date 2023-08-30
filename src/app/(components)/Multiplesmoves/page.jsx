
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
//               <div>{card}</div>
//             </div>
//             <div>
//               <div>{card2}</div>
//             </div>
//             <div>
//               <div>{card3}</div>
//             </div>
//             <div>
//               <div>{card4}</div>
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

export default class Multiplesmoves extends Component {
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
            slidesToScroll: 2,
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
    const { card1, card2, card3, card4 ,card5, card6 , card7,card8,  } = this.props;
    return (
      <div >
        {/* Removed redundant arrow components */}
        <h1 className="text-blue-600 text-2xl my-2"  >Our Portfolio</h1>
        <p className="text-4xl font-semibold my-2 " >Take a look at our latest work</p>
        <Slider {...settings} >
          <div className="p-2  " >
            <div className="mb-5"  >{card1}</div>
            <div>{card2}</div>
          </div>
          <div className="p-2 " >
            <div className="mb-5"  >{card3}</div>
            <div>{card4}</div>
          </div>
          <div className="p-2 " >
            <div className="mb-5"  >{card4}</div>
            <div>{card5}</div>
          </div>
          <div className="p-2 " >
            <div className="mb-5"  >{card7}</div>
            <div>{card8}</div>
          </div>

        </Slider>
      </div>
    );
  }
}
