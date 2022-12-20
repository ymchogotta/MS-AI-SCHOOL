# p태그 두 개를 불러와서 합친 걸 표시
<body>
    <p>hello</p>
    <p>world</p>
    <p></p>
    <script>
        let pElements = document.getElementsByTagName('p')
        let result = pElements[0].innerHTML + pElements[1].innerHTML
        pElements[2].innerHTML = result
    </script>
</body>

# hello 10개 추가하기
<body>
    <div id="parent"></div>
    <script>
        let divElement = document.getElementById('parent')
        for(let i=0; i<10; i++){
            divElement.innerHTML += "<p>hello<\p>"
        }
    </script>
</body>

# p가 홀수이면 초록색, 짝수면 빨간색
<body>
    <p>4</p>
    <script>
        function isEven(value){
            return value%2 == 0
        }
        let pElements = document.getElementsByTagName('p')
        let result = isEven(parseInt(pElements[0].innerText))
        if(result){
            pElements[0].style.color = 'red'
        }else{
            pElements[0].style.color = 'green'
        }
    </script>
</body>

# p 중에서 홀수 번째인 것만 배경색을 red로
<body>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <script>
        let pElements = document.getElementsByTagName('p')
        for(let i=0; i<pElements.length; i++){
            if(i % 2 == 0){
                pElements[i].style.backgroundColor = 'red'
            }
        }
    </script>
</body>

# 객체에 이벤트 핸들러 등록
<body>
    <h1>hello</h1>
    <p class="test">testing</p>
    <p class="test">testing</p>
    <p id="lulu">lulu</p>
    <script>
        let luElement = document.getElementById('lulu')
        luElement.addEventListener('click', function(){
            alert('Click!')
        })
    </script>
</body>

# 브라우저 크기가 변할 때 처리해주기
<body>
    <h1>hello</h1>
    <p class="test">testing</p>
    <p class="test">testing</p>
    <p id="lulu">lulu</p>
    <script>
        window.addEventListener('resize', function(){
            alert(window.innderWidth)
        })
    </script>
</body>

# 버튼 클릭하면 경고창에 hello 출력
<body>
    <button>click</button>
    <script>
        let buttonElement = document.getElementsByTagName('button')[0]
        buttonElement.addEventListener('click', function(){
            alert('hello')
        })
    </script>
</body>

# 버튼 클릭하면 배경색 변경
<body>
    <button>click</button>
    <p>hello</p>
    <script>
        let buttonElement = document.getElementsByTagName('button')[0]
        buttonElement.addEventListener('click', function(){
            let pElement = document.getElementsByTagName('p')[0]
            pElement.style.backgroundColor = 'red'
        })
    </script>
</body>

# 버튼 클릭하면 hello 추가
<body>
    <button>click</button>
    <div></div>
    <script>
        let buttonElement = document.getElementsByTagName('button')[0]
        buttonElement.addEventListener('click', function(){
            let divElement = document.getElementsByTagName('div')[0]
            divElement.innerHTML = 'hello'
        })
    </script>
</body>

# 버튼 클릭하면 계속 hello 추가




