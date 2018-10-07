<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/mdb.min.css">
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="css/gora.css">
    {{-- <link rel="stylesheet" href="css/style.css"> --}}

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

</head>

<div id="app">

    <header>
        <MyHeader></MyHeader>
    </header>
    <body >
        <router-view></router-view>
    </body>

    <footer>
        <Myfooter></Myfooter>
    </footer>

</div>

    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('js/bootstrap.js')}}"></script>
    <script src="{{asset('js/mdb.js')}}"></script>
    <script src="{{asset('js/popper.min.js')}}"></script>

{{--  --}}

{{-- <script>
    (function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#menu').fadeIn(500);
            } else {
                $('#menu').fadeOut(500);
            }
        });
    });
})(jQuery);
</script> --}}

<script>

</script>
<style>
    body{
        padding: 0!important;
        margin: 0!important;
    }
    #menu{
        transition: top 0.2s ease-in-out;
    }
</style>
</html>
