# 01.js
function sum(array){
    let sum=0
    for(let i=0; i<array.length; i++){
        sum += numbers[i]
    }
    return sum
}

let numbers = [10, 20, 30]
let result = sum(numbers)
console.log(result)

# 02.js
function isEven(num){
    if (num%2 == 0){ return true }
    else { return false }
}
let number = 2
let result = isEven(number)
console.log(result)

# 03.js
function isOdd(num){
    if (num%2 == 1) { return true }
    else {return false }
}

let number = 3
let result = isOdd(number)
console.log(result)

# 04.js
function evenSum(array){
    let sum = 0
    for(let i=0; i<array.length; i++){
        if(array[i]%2 == 0) { sum += array[i] }
    }
    return sum
}
let numbers = [10, 21, 30]
let result = evenSum(numbers)
console.log(result)

# 05.js
function objectSum(numO){
    let sum = 0
    for(let i=0; i<numO.length; i++){
        if(numO[i]['number']%2 == 1) { sum += numO[i]['number']}
    }
    return sum
}
let numObject = [{'name':'lee','number':22}, {'name':'park','number':11}]
let result = objectSum(numObject)
console.log(result)

# 06.js
function totalSum(n){
    let total = 0
    while(n > 0){
        total += n--
    }
    return total
}
let num = 11
let result = totalSum(num)
console.log(result)

# 07.js
function countKorean(array){
    let count = 0
    for(let i=0; i<array.length; i++){
        if(array[i]=='국어') { count++}
    }
    return count
}
let subs = ['국어','수학','영어','국어','과학']
let result = countKorean(subs)
console.log(result)

# 08.js
function countSubject(subject,array){
    let count = 0
    for(let i=0; i<array.length; i++){
        if(array[i]==subject){
            count++
        }
    }
    return count
}
let subs = ['국어','수학','영어','국어','과학']
let result = countSubject('수학',subs)
console.log(result)

# 09.js
function countGrade(array){
    let count = 0
    for(let i=0; i<array.length; i++){
        if(array[i] >= 90) { count++ }
    }
    return count
}
let grads = [90, 82, 100, 70, 80]
let result = countGrade(grads)
console.log(result)

# 10.js
function avg(array){
    let sum = 0
    let count = 0
    for(let i =0; i<array.length; i++){
        if(array[i] >= 90) {
            sum += array[i] 
            count++
        }
    }
    let average = sum / count
    return average
}
let grads = [90, 82, 100, 70, 80]
let result = avg(grads)
console.log(result)




## 5DAY - JQUERY 기초
# 01.html
<body>
    <h1>contents</h1>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            $('h1').css({
            "color": "red",
            "background-color": "blue"
            })
        })
    </script>
</body>
</html>

# 02.html
<body>
    <p class="first">1</p>
    <p class="second">2</p>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            $(".second").css("background-color", "red")
        })
    </script>
</body>
</html>

# 03.html
<body>
    <p class="first">1</p>
    <p class="second">2</p>
    <p class="first">1</p>
    <p class="second">2</p>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            $('.first').css("background-color","blue")
            $('.second').css("background-color", "red")
        })
    </script>
</body>
</html>

# 04.html
<body>
    <h1>hello world</h1>
    <p>This is changed</p>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        let fontSize = $('h1').css('font-size')
        $('p').css('font-size', fontSize)
    </script>
</body>
</html>

# 05.html
<body>
    <h1>hello world</h1>
    <p>This is changed</p>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            let h1content = $('h1').html()
            $('p').html(h1content)
        })
    </script>
</body>
</html>

# 06.html
<body>
    <div class="parent">parent</div>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            let parent = $('.parent')
            for(let i=0; i<10; i++){
                parent.append('<p>child</p>')
            }
        })
    </script>
</body>
</html>

# 07.html
<body>
    <h1>23</h1>
    <div class="parent"></div>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        let h1Num = parseInt($('h1').html())    // parseInt : 문자열을 숫자로 변환
        let parent = $('.parent')
        for(let i=0; i<h1Num; i++){
            parent.append('<p>hello world</p>')
        }
    </script>
</body>
</html>

# 08.html
    <style>
        h1{
            font-size: 30px;
        }
    </style>
</head>
<body>
    <h1>3</h1>
    <div class="parent"></div>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>

     function isEven(value){
        return value % 2 == 0
     }

     function writeEven(num, elem){
        if(isEven(num)){
            elem.html('짝수')
        }else{
            elem.html('홀수')
        }
     }
     function init(){
        let h1Num = parseInt($('h1').html())
        let div = $('.parent')
        writeEven(h1Num, div)
     }

     init()

    </script>
</body>
</html>

# 09.html
<body>
    <div class="parent"></div>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        let people = [
            {name: "홍길동", age: 16},
            {name: "임꺽정", age: 18},
            {name: "전우치", age: 19}
        ]

        function createElementByArray(array){
            let peopleArray = []
            peopleArray.push($('<h1>총회원수: ' + array.length + '<h1>'))
            for(let i=0; i < array.length; i++){
                let personElement = $('<p>이름: ' + array[i]['name'] + ', 나이' + array[i].age + '</p>')
                peopleArray.push(personElement)
            }
            return peopleArray
        }

        function rendering(){
            let parent = $('.parent')
            let peopleArray = createElementByArray(people)
            peopleArray.forEach(function(element){
                parent.append(element)
            })
        }
        rendering()
    </script>
</body>
</html>
