






function htmlTemplate() {

    const htmlItems= `
    <div class="box-conatiner">
    <div class="box-1">
    <h2 class="mytext">Rotate 3D</h2>
    </div>
    <div class="box-2">
    <h2 class="mytext">Rotate me</h2>
    </div>
    <div class="box-3">
    <h2 class="mytext">Scale 3D</h2>
    </div>
    <div class="box-4">
    <h2 class="mytext">BOX-4</h2>
    </div>
    <div class="box-5">
    <h2 class="mytext">BOX-5</h2>
    </div>
    <div class="box-6">
    <h2 class="mytext">BOX-6</h2>
    </div>
    </div>
    <div class="text-container">
    <p class="text-transform"> This is text. (hover me)</p>
    <p class="text-2"> This is text ease out.</p>
    <p class="text-3"> All properties to text applied.</p>
    </div>
    
    <div class="rectangle-box">
    <div class="one"></div>
    <div class="two"></div>
    </div>
    <div class="img-box">
    <img src="icon/computer-.jpg" alt="computer icon">
    
    </div>

    `;
    document.querySelector('.container').innerHTML=htmlItems;
}

htmlTemplate();