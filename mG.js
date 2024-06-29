document.addEventListener('DOMContentLoaded',function(){
    let formSubmission = document.getElementById('inputForm'); //Form variable
    let memeField = document.getElementById('memeField'); //Section where the meme's will be displayed

    formSubmission.addEventListener('submit',function(event) {
        event.preventDefault();
        let memeDiv = document.createElement('div');
        memeDiv.style.width = '300px';
        memeDiv.style.height = '300px';
        memeDiv.style.position = 'relative';
        memeDiv.classList = 'newMemes';
        let memeImage = document.createElement('img');
        memeImage.src = URLID.value;
        memeDiv.appendChild(memeImage);
        let upperTextInput = document.getElementById('topTextID');
        let upperText = document.createElement('p');
        upperText.innerText = upperTextInput.value;
        let bottomTextInput = document.getElementById('bottomTextID');
        let bottomText = document.createElement('p');
        bottomText.innerText = bottomTextInput.value;
        memeField.appendChild(memeDiv);
        memeDiv.appendChild(upperText);
        memeDiv.appendChild(bottomText);
        let xOut = document.createElement('h2');
        xOut.innerText = 'X';
        memeDiv.appendChild(xOut);
        formSubmission.reset();

        memeDiv.addEventListener('click',function(event) {
            const target = event.target.tagName.toLowerCase();
            if (target === 'img'){
                console.log(event.target)
                event.target.parentNode.remove();
            };
        })
    });
});