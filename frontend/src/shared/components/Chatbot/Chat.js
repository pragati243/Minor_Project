// import "./Chat.css";
// import Main from "./Main";
// import Popup from "reactjs-popup";
// import React, { useState } from 'react';
// function Chat() {
//   // Blur Effect on Main Page
//   const [isOpen, setIsOpen] = useState(false);
//   const [count, setCount] = useState(0);
//   const blur = () => {
//     if (!isOpen) {
//       document.getElementById("wrapper").style.filter = "blur(10px)";
//       setIsOpen(true);
//     } else {
//       document.getElementById("wrapper").style.filter = "blur(0px)";
//       setIsOpen(false);
//     }
//   };
//   const blur_main = () => {
//     if (isOpen) {
//       document.getElementById("wrapper").style.filter = "blur(0px)";
//       setIsOpen(false);
//     }
//   };
//   // Wrapper Return
//   return (
//     <>
//       <div>
//         <Popup
//           trigger={
//             <div>
//               <button>
//                 <img
//                   className="image-size popup rounded-circle"
//                   alt="Guru"
//                   src="/ask_guru.png"
//                   onClick={blur}
//                   title="ASK GURU"
//                 />
//               </button>
//             </div>
//           }
//         >
//           <Main className="component" />
//         </Popup>
//       </div>
//     </>
//   );
// }

// export default Chat;
import "./Chat.css";
import Main from "./Main";
import Popup from "reactjs-popup";
import React from 'react';

function Chat() {
  return (
    <>
      <div>
        <Popup
          trigger={
            <div>
              <button>
                <img
                  className="image-size popup rounded-circle"
                  alt="Guru"
                  src="/ask_guru.png"
                  title="ASK GURU"
                />
              </button>
            </div>
          }
        >
          <Main className="component" />
        </Popup>
      </div>
    </>
  );
}

export default Chat;
