<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <script src="CalcuJavaScript.js"></script>
</head>
<body>
    <main>
        <div id="calculadora">
            <div id="resultados-div">
                <input type="text" id="op">
                <input type="number" id="r" readonly>
            </div>
            <div id="numeros">
                <?php
				for($i=0;$i<10;$i++){?>
					<button class="num"><?=$i?></button>
				<?php
				}
				?>
                <button id="sum" class="b-op">+</button>
                <button id="sub" class="b-op">-</button>
                <button id="mul" class="b-op">*</button>
                <button id="divs" class="b-op">/</button>
                <button id="limpar">C</button>
                <button id="calcular">=</button>
                <button id="memoriaG">M+</button>
                <button id="memoriaR">M-</button>
            </div>
        </div>
        <div id="memoria-box">
            <div id="memoria-box-filho"></div>
        </div>
    </main>
</body>
</html>