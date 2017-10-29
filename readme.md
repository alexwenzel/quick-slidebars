# quick slidebars

a - ready to go - mobile menu exmaple with slidebars

Slidebars - https://github.com/adchsm/Slidebars

## structure

~~~html
<!doctype html>
<html>
<head>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="../bower_components/slidebars/dist/slidebars.min.css">
    <link rel="stylesheet" href="../bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="../src/styles.css">
</head>

<body>

<div canvas="container">
    <button>
        Toggle slidebar
    </button>
</div>

<nav class="qs" off-canvas="qs-1 left push">
    
</nav>

<script src="../bower_components/jquery/dist/jquery.min.js"></script>
<script src="../bower_components/slidebars/dist/slidebars.min.js"></script>
<script src="../src/quickslidebars.jquery.js"></script>
<script>
    $(function () {
        $('nav').quickSlidebars({
            slidebarName: 'qs-1',
            burgerMenuSelector: 'button'
        });
    });
</script>
</body>
</html>
~~~

## qs menu

~~~html
<nav class="qs" off-canvas="qs-1 left push">
    <ul class="qs-menu">
        <li class="qs-level">
            <a class="qs-item qs-item--has-child" href="#">Level 1</a>
            <ul>
                <li class="qs-level">
                    <a class="qs-item qs-item--has-child" href="#">Level 2</a>
                    <ul>
                        <li class="qs-level "><a class="qs-item" href="#">Level 3</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</nav>
~~~