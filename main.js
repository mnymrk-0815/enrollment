

const houshiki = document.querySelectorAll('[name=radio1]');
const span = document.querySelectorAll('span');

function switchDisabled(val) {
    document.querySelectorAll('[name=radio2],[name=radio3]').forEach(function (element) {
        element.disabled = val;
    });
}


//「学内進学」「飛び級」選択時に下のボタンを無効化
for (let i = 0; i < houshiki.length; i++) {
    houshiki[i].addEventListener('change', function () {

        switch (houshiki[i].id) {
            case 'inner-university':
                switchDisabled(true);
                for(let i = 0; i < span.length;i++) {
                    span[i].classList.remove('none');
                }
                break;

            case 'gradeskippers':
                switchDisabled(true);
                for(let i = 0; i < span.length;i++) {
                    span[i].classList.remove('none');
                }
                break;

            default:
                switchDisabled(false);       
        }
    })
}


//ボタンクリックで提出書類を判定

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {

    //ラジオボタンで選択された値を変数に代入
    let method = document.method.radio1.value;
    let status = document.status.radio2.value;
    let university = document.university.radio3.value;

    //一般入試・既卒
    if (method === 'general' && status === 'graduated') {
        document.querySelector('.pattern1').style.display = 'block';
    }
    //一般入試・見込・本学卒    
    else if (method === 'general' && status === 'in-school' && university === 'alumnus') {
        document.querySelector('.pattern1').style.display = 'block';
    }
    //一般入試・見込・他学卒    
    else if (method === 'general' && status === 'in-school' && university === 'not-alumnus') {
        document.querySelector('.pattern2').style.display = 'block';
    }
    //学内入試
    else if (method === 'inner-university') {
        document.querySelector('.pattern1').style.display = 'block';
    }
   
    //留学生入試・既卒
    else if (method === 'international' && status === 'graduated') {
        document.querySelector('.pattern3').style.display = 'block';

    }
    //留学生入試・見込
    else if (method === 'international' && status === 'in-school') {
        document.querySelector('.pattern4').style.display = 'block';
    }
    //飛び級入試
    else if (method === 'gradeskippers') {
        document.querySelector('.pattern5').style.display = 'block';
    }


});

//クリアボタンで入力した値をクリア

document.getElementById('clear').addEventListener('click', function () {
     document.method.reset();
     document.status.reset();
     document.university.reset();

    let elements = document.querySelectorAll('.doc');
      for (let i = 0; i < 5; i++) {
          element = elements.item(i);
          element.style.display = 'none';
  }

  for(let i = 0; i < span.length;i++) {
    span[i].classList.add('none');
}
    switchDisabled(false);


});

















