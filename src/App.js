import "./App.css";
import Main from "./Components/Main/Main";

const arr = [
  { id: 1, img: "images/avenger.jpg", vid: "videos/avg.mp4" },
  { id: 2, img: "images/cap-am-win.jpg", vid: "videos/avg-2.mp4" },
  { id: 3, img: "images/cap-am.jpg", vid: "videos/avg.mp4" },
  { id: 4, img: "images/cap-merval.jpg", vid: "videos/avg-2.mp4" },
  { id: 5, img: "images/iron-1.jpg", vid: "videos/avg.mp4" },
  { id: 6, img: "images/iron-2.jpg", vid: "videos/avg-2.mp4" },
  { id: 7, img: "images/iron-3.jpg", vid: "videos/avg.mp4" },
  { id: 8, img: "images/in-hulk.jpg", vid: "videos/avg-2.mp4" },
  { id: 9, img: "images/thor-dark.jpg", vid: "videos/avg.mp4" },
  { id: 10, img: "images/thor.jpg", vid: "videos/avg-2.mp4" },
];

function App() {
  return (
    <>
      <Main arr={arr} />
      <img src="../public/" alt="" />
    </>
  );
}

export default App;

// const [lowRange, setLowRange] = useState(arr[0]);
// const [upRange, setUpRange] = useState(arr[0] + 3);
// const [first, setFirst] = useState(arr[arr.length - 1]);
// const [second, setSecond] = useState(arr[arr.length - 2]);
// const [third, setThird] = useState(arr[arr.length - 3]);
// const [condi, setCondi] = useState(false);
// const [changeCondi, setChangeCondi] = useState(0);

// const plus = () => {
//   if (upRange === arr.length) {
//     return;
//   }
//   setUpRange(upRange + 1);
//   setLowRange(lowRange + 1);
//   if (lowRange === arr[0]) {
//     setFirst(arr[0]);
//     setSecond(arr[arr.length - 1]);
//     setThird(arr[arr.length - 2]);
//   } else if (lowRange === arr[1]) {
//     setFirst(arr[1]);
//     setSecond(arr[0]);
//     setThird(arr[arr.length - 1]);
//   } else if (lowRange === arr[2]) {
//     setFirst(arr[2]);
//     setSecond(arr[1]);
//     setThird(arr[0]);
//   } else {
//     setFirst(first + 1);
//     setSecond(second + 1);
//     setThird(third + 1);
//   }
// };

// const minus = () => {
//   if (lowRange === arr[0]) {
//     return;
//   }
//   setCondi(true);
//   setChangeCondi(changeCondi + 1);
//   setLowRange(lowRange - 1);
//   setUpRange(upRange - 1);
//   if (lowRange === arr[3]) {
//     setFirst(arr[1]);
//     setSecond(arr[0]);
//     setThird(arr[arr.length - 1]);
//   } else if (lowRange === arr[2]) {
//     setFirst(arr[0]);
//     setSecond(arr[arr.length - 1]);
//     setThird(arr[arr.length - 2]);
//   } else if (lowRange === arr[1]) {
//     setFirst(arr[arr.length - 1]);
//     setSecond(arr[arr.length - 2]);
//     setThird(arr[arr.length - 3]);
//   } else {
//     setFirst(first - 1);
//     setSecond(second - 1);
//     setThird(third - 1);
//   }
//   setInterval(() => {
//     setCondi(false);
//   }, 1000);
// };
