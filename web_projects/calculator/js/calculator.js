(function(){
  const display = document.getElementById('display');
  const keys = document.querySelector('.keys');
  let firstValue = null;
  let operator = null;
  let waitingForSecond = false;

  function inputNumber(num){
    if(waitingForSecond){
      display.textContent = num;
      waitingForSecond = false;
    } else {
      display.textContent = display.textContent === '0' ? num : display.textContent + num;
    }
  }

  function inputDecimal(){
    if(waitingForSecond) {
      display.textContent = '0.';
      waitingForSecond = false;
      return;
    }
    if(!display.textContent.includes('.')) display.textContent += '.';
  }

  function handleOperator(nextOperator){
    const inputValue = parseFloat(display.textContent);
    if(operator && waitingForSecond){
      operator = nextOperator;
      return;
    }
    if(firstValue == null){
      firstValue = inputValue;
    } else if(operator){
      const result = operate(firstValue, inputValue, operator);
      display.textContent = String(result);
      firstValue = result;
    }
    waitingForSecond = true;
    operator = nextOperator;
  }

  function operate(a,b,op){
    if(op === 'add') return a + b;
    if(op === 'subtract') return a - b;
    if(op === 'multiply') return a * b;
    if(op === 'divide') return b === 0 ? 'Error' : a / b;
    return b;
  }

  keys.addEventListener('click', e=>{
    const target = e.target;
    if(!target.matches('button')) return;
    if(target.dataset.action === 'decimal'){ inputDecimal(); return; }
    if(target.dataset.action === 'clear'){ display.textContent = '0'; firstValue = null; operator = null; waitingForSecond = false; return; }
    if(target.dataset.action === 'posneg'){ display.textContent = String(parseFloat(display.textContent) * -1); return;}
    if(target.dataset.action === 'percent'){ display.textContent = String(parseFloat(display.textContent) / 100); return;}
    if(target.dataset.action === 'add'){ handleOperator('add'); return; }
    if(target.dataset.action === 'subtract'){ handleOperator('subtract'); return; }
    if(target.dataset.action === 'multiply'){ handleOperator('multiply'); return; }
    if(target.dataset.action === 'divide'){ handleOperator('divide'); return; }
    if(target.dataset.action === 'calculate'){ if(operator){ display.textContent = String(operate(firstValue, parseFloat(display.textContent), operator)); operator = null; firstValue = null; } return; }
    // number
    inputNumber(target.textContent);
  });

  // keyboard support
  window.addEventListener('keydown', e=>{
    if(/\d/.test(e.key)) inputNumber(e.key);
    if(e.key === '.') inputDecimal();
    if(e.key === 'Enter' || e.key === '=') document.querySelector('[data-action="calculate"]').click();
    if(e.key === '+') document.querySelector('[data-action="add"]').click();
    if(e.key === '-') document.querySelector('[data-action="subtract"]').click();
    if(e.key === '*') document.querySelector('[data-action="multiply"]').click();
    if(e.key === '/') document.querySelector('[data-action="divide"]').click();
    if(e.key === 'Backspace') document.querySelector('[data-action="clear"]').click();
  })
})();
