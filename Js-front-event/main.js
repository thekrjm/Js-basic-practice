import { countUp } from "./utils/countUp.js";

const data = {
  participate: 1341513412,
};

const participateDOM = document.getElementById('participate-number');
countUp(participateDOM, data.participate, 0, 0); //증가하는 애니메이션과 함께 갱신