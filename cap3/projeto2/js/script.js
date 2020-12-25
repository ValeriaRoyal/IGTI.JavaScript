//window.addEventListener('load', start); == difer

var rangeFrequencies = null;
var divPodcast = null;
var inputFrequency = null;

function start(){
    rangeFrequencies = document.querySelector('#rangeFrequencies');
    divPodcast = document.querySelector('#divPodcast');
    inputFrequency = document.querySelector('#inputFrequency');

    rangeFrequencies.addEventListener('input', handleRangeValueChange);

}
function handleRangeValueChange(event) {
    var currentFrequency = event.target.value;
    inputFrequency.value = currentFrequency;

    checkExistingPodcast(currentFrequency);
}
function checkExistingPodcast(frequency) {
    var foundPodcast = null;

    for(var i = 0; i< realPodcasts.length;i++){
        var currentPodcast = realPodcasts[i];

        if (currentPodcast.id === frequency) {
            foundPodcast = currentPodcast;
            break;
        }
    }
    if (foundPodcast) {
        renderPodcast(foundPodcast);
        divPodcast.innerHTML = '<p> Podcast encontrado </p>';
    }else{
        divPodcast.innerHTML = '<p> Nenhum podcast encontrado </p>';
    }
}

function renderPodcast(podcast) {
    divPodcast.innerHTML = '';
    
    var img = document.createElement('img');
    img.src = '/img/' + podcast.img;

    var title = document.createElement('h2');
    title.textContent = podcast.title;

    var description = document.createElement('p');
    description.textContent = podcast.description;

    divPodcast.appendChild(img);
    divPodcast.appendChild(title);
    divPodcast.appendChild(description);
}

start();