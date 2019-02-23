Vue.component('mynavbar', {
    template: `<nav class="nav sticky-top navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="index.html"><img src="pic/logo.png" alt="" width="150px"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class=" collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ">
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#moviezone">Movie <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">??? <span class="sr-only">(current)</span></a>
            </li>
        </ul>

        <form class=" search form-inline  mr-4">
            <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search"
                v-model="searchText">
        </form>
        <ul class="navbar-nav mr-10">
            <li class="nav-item log">
                <a href="">
                    <img src="pic/login-password.png">
                    <img src="pic/login-passwordh.png" class="img-top" alt="Card Front">
                    <p>Login</p>
                </a>
            </li>

            <li class="nav-item user">
                <a href="">
                    <img src="pic/avatar.png">
                    <img src="pic/userh.png" class="img-top" alt="Card Front">
                    <p>SignUp</p>
                </a>
            </li>
        </ul>
    </div>
</nav>`,

})