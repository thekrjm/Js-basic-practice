// dom : innerHTML이 갱신될 노드
// target : 목표 숫자
// second : 몇 초가 증가할지
// term : 몇 씩 증가할지

export const countUp = (dom, target, second, term = 15) => {
    if (!dom || isNaN(Number(target)) || isNaN(Number(second)) || isNaN(Number(term))) return;

    let nowNumber = 0;
    const countTerm = 100;
    const timerId = setInterval(() => {
        if (nowNumber > target) {
            nowNumber = target;
            clearInterval(timerId);
        }
        nowNumber += countTerm;
        dom.innerHTML = `${nowNumber.toLocaleString()}`;
    }, 1000); //1초마다 해당 함수 실행
};