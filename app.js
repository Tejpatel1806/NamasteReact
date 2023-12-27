import React from "react";
import ReactDOM from "react-dom/client";


//REact.createElement create the React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello World From React!");
console.log(heading);
//uper je aapde print karayu tema javascript object print thase karan ke React.createElement che te  javascript object return karse
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
//render method che te javascript object heading ne html tag ma convert karse ane root ma render karavse means display karavse browser ma 


//nested structure create karvu hoy to react ma
//React.createElemnt ma third argument tarike children aave means aapda children kaya kaya che em e current tag na 
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Iam an H1 tag")));
root.render(parent);

//sibling banava hoy to like:- to ena mate third argument ma array of element aapvana
// <div>
//     <div>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>
const parent1 = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Iam an H1 tag"), React.createElement("h2", {}, "Iam an H2 tag")]));
root.render(parent1);

// JSX(Javascript XML)
//JSX code is transpiled before it's goes to the JS Engine ane aa transpiled karvanu kam Parcel nu package che jenu name Babel che teh karse
//Babel che te JSX cod ne browser understand kari sake tevi language ma convert karse inshort JS engine understand kari sake teva ma convert karse
//Babel is a javascript compiler.
//IMP:- Aama evu che ke jyare pan aapde JSX ma code lakhie tyare Babel compiler che teh aapda JSX na code ne React.createElement ma convertr karse etle have e 
//React.createElement ni jem j object return karse ane e object using render method HTML tag ma convert thase ane browser ma display thase
//aapde JSX ma className aavu lakhie chie pan te convert thai jay che class ma jyare aapde inspect par element ma joie etle means ke aapdo JSX element che
//teh React.createElement ma convert thay che ane aa kam Babel kare che ane pachi e object HTML Tag ma convert thay che using render methods
const jsxheading=<h1 id="heading">Hello this message from JSX</h1>
console.log(jsxheading);
//aa JSX thi banavelo h1 tag pan object j return karse like aapde React.createElement thi karta to e pan object j return kartu hatu te rite aa pan object j 
//return karse
//have ene render karavsu etle te jsxheading ne html tag ma convert karse ane browser ma display karse
root.render(jsxheading);


//react functional component:-react functional component is a component that return some JSX Code
//normal javascript function that return some piece of JSX Code is are known as React functional component
//React functional component nu name must be first letter capital hovo joie baki te error aapse
const Heading1=()=>{
    return <h1 id="heading1">this is a heading component</h1>;
};
//niche vadi syntax che react functional component ne render karavani
//IMP:-COMPONENT COMPOSITION:-component composition means ek react component ni andar aapde bija react component ne render karayo hoy like:-
//aama Hello1 che te ek react functional component che
//const Hello=()=>{return <Hello1/>}

//JSX ni andar javascript lakhva mate aapde tene {} aani andar lakhvu pade
root.render(<Heading1></Heading1>);
//uper ni line ane aa line banne same thay root.render(Heading1());karan ke react functional component ek javascript function j che so aapde tene cal kari sakie



