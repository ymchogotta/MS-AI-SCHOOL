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
