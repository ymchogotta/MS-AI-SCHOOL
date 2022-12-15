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
