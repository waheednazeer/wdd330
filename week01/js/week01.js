






function htmlTemplate() {

    const htmlItems= `
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
    `;
    document.querySelector('.container').innerHTML=htmlItems;
}

htmlTemplate();