

function showImage(imageName) 
{
    document.getElementById('rightContainer').style.display = 'block';
    document.getElementById('videoContainer').style.display = 'none';
    const imgElement = document.getElementById('displayedImage');
    imgElement.src = imageName;
    imgElement.style.display = 'block';
}

function video_v()
{
document.getElementById('rightContainer').style.display = 'none';
document.getElementById('videoContainer').style.display = 'block';
}