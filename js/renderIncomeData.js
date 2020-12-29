

/**
 * 
 * @param {*} selector  selektorius, kaip rasti norima vieta turinio generavimui
 * @param {*} data duomenys reikalingi ataskaitai
 */
function annualIncomeRender(selector, account) {

const DOM = document.querySelector(selector);

let HTML = '';

console.log(DOM);
const annualIncome = account.data.length;  

    for (let i = 0; i < annualIncome; i++) {
        const income = account.data[i]; 
        HTML += `<div class="table-row">
                    <div class="cell">1</div>
                    <div class="cell">${income.month}</div>
                    <div class="cell">${income.income} Eur</div>
                    <div class="cell">${income.expense}</div>
                    <div class="cell">150.00 Eur</div>
                </div>`;
    }

DOM.innerHTML = HTML;
}
export { annualIncomeRender }
