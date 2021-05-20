function myFunc() {
    var input = prompt('Nhập thời gian');
    var count = input * 60;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    var seconds = document.querySelector('.Second');
    var button = document.querySelector('.takenap');
    var buttonSkip = document.querySelector('.skip');
    function timer()
    {
        if (count > 60) {
            seconds.innerText = Math.floor(count / 60) + ':' + count % 60;
        }
        else {
            seconds.innerText = count;
        }
        count=count-1;
        if (count < 0)
        {
            clearInterval(counter);
            alert('Nghỉ ngơi chút nàoooooo!');
            button.addEventListener('click', function nap() {
                var takeANap = document.querySelector('h2');
                var timeRest = 300;
                var counter2=setInterval(timer2, 1000);
                function timer2()
                {   
                    buttonSkip.addEventListener('click', function() {
                        timeRest = 0;
                    });
                    if (timeRest > 60) {
                        takeANap.innerText = Math.floor(timeRest / 60) + ':' + timeRest % 60;
                    }
                    else {
                        takeANap.innerText = timeRest;
                    }
                        timeRest=timeRest-1;
                    if (timeRest <= 0)
                    {
                        clearInterval(counter2);
                    }
                }
            });
        }
    }
}

myFunc();


