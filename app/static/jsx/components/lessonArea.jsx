/*
File: lessonArea.jsx
Description: file exports the LessonArea React Component which implements the lesson display area

IMPORTANT!!! If you are reading this from within a .js file,  EXIT THE FILE!!!  Go to the jsx/components directory 
    and find lessonArea.jsx.  React is Transpiled from JSX, unless you are familiar with React, you will not
    understand anything about the file unless you read the JSX file which is declarative and self documenting 


    it is important to note that you should not 
	make any changes to that file if you wish to edit the PyGoat client, instead follow the directions on 
	the README.md contained within the static directory. Make sure any editing is done with the .jsx version
	of this file inside the static/jsx directory

Conventions followed:
    4-space tabs
    always place semicolons
    trailing commas in arrays and objects
    3 empty lines between classes and functions
    2 empty lines between methods
    Class methods always return this unless other return value desired
    Annotations follow the convention:     
            function/method  ::  (parameter types) -> (return types)
*/


"use strict";


/**
 * LessonArea  ::  Object  ->  JSX
 * 
 * @param {"Object"} props 
 * 
 * Component is used to house the lesson contents that are rendered upon changing the page or page number
 *      
 * Returns a JSX component
 */
export function LessonArea(props) {

    // because I cannot use the ... spread operator in JSX, I need to incorporate the first and 
    // third elements into the array and render that to keep them all in the same line
    const pageNav = Array.from(props.children[1]);
    pageNav.unshift(props.children[0]);
    pageNav.push(props.children[2]);

    const feedbackColor = props.store.checkActivePage().completed ? "green" : "blue";


    return (
        <div id="inner-lesson-area">
            <div className="inBlock w100" id="page-nav">
                <div className="flexIt" id="inner-page-nav">
                    {pageNav}
                </div>
                <hr />
                <div className="renderHTML w100"></div>
                <div className="renderResultHTML w75" style={{ backgroundColor: feedbackColor, color: "white" }}></div>
            </div>
        </div>
    );
}

// Preferred: Use shorthand syntax for export (see above)
// export { LessonArea }