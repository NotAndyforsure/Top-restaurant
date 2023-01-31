/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ headerComp)
/* harmony export */ });


function headerComp() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  header.setAttribute("class", "header");
  areYouHungry(header);
  menu(header);
  return header;
}

function areYouHungry(ele) {
  const text = document.createElement("h1");
  text.setAttribute("id", "areyouhungry");
  text.setAttribute("class", "areyouhungry");
  text.textContent = "Are You Hungry?";
  return ele.appendChild(text);
}

function menu(ele) {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("class", "menu");
  const eat = document.createElement("div");
  eat.setAttribute("id", "eat");
  eat.setAttribute("class", "eat");
  eat.textContent = "Eat";
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("class", "contact");
  contact.textContent = "Contact";
  const about = document.createElement("div");
  about.setAttribute("id", "about");
  about.setAttribute("class", "about");
  about.textContent = "About";
  eat.tabIndex = "1";
  contact.tabIndex = "2";
  about.tabIndex = "3";
  for (let i of [eat, contact, about]) {
    menu.appendChild(i);
  }
  return ele.appendChild(menu);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgaGVhZGVyQ29tcCBhcyBoZWFkZXIgfTtcblxuZnVuY3Rpb24gaGVhZGVyQ29tcCgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkZXJcIik7XG4gIGFyZVlvdUh1bmdyeShoZWFkZXIpO1xuICBtZW51KGhlYWRlcik7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGFyZVlvdUh1bmdyeShlbGUpIHtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFyZXlvdWh1bmdyeVwiKTtcbiAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFyZXlvdWh1bmdyeVwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwiQXJlIFlvdSBIdW5ncnk/XCI7XG4gIHJldHVybiBlbGUuYXBwZW5kQ2hpbGQodGV4dCk7XG59XG5cbmZ1bmN0aW9uIG1lbnUoZWxlKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIik7XG4gIGNvbnN0IGVhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVhdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVhdFwiKTtcbiAgZWF0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWF0XCIpO1xuICBlYXQudGV4dENvbnRlbnQgPSBcIkVhdFwiO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG4gIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0XCIpO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcbiAgYWJvdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhYm91dFwiKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG4gIGVhdC50YWJJbmRleCA9IFwiMVwiO1xuICBjb250YWN0LnRhYkluZGV4ID0gXCIyXCI7XG4gIGFib3V0LnRhYkluZGV4ID0gXCIzXCI7XG4gIGZvciAobGV0IGkgb2YgW2VhdCwgY29udGFjdCwgYWJvdXRdKSB7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpKTtcbiAgfVxuICByZXR1cm4gZWxlLmFwcGVuZENoaWxkKG1lbnUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9