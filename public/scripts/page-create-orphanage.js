//create map
const map = L.map('mapid').setView([-27.2057496,-49.6582354], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon tileLayer
    marker = L.marker([lat, lng], { icon })
                .addTo(map);
});

// Add field of photos
function addPhotoField() {
    // get photo's container #images
    const container = document.querySelector('#images');

    // get container for duplicate .new-upload
    const newUpload = document.querySelectorAll('.new-upload');

    // make a clone from the last added image
    const newUploadClone = newUpload[(newUpload.length - 1)].cloneNode(true);

    // check if field is empty, if yes, don't add to image's container
    const input = newUploadClone.children[0];

    if( input.value == "" ) {
        return
    }

    // clear newUploadClone before add it to image's container
    input.value = "";

    // add clone to container #images
    container.appendChild(newUploadClone);

}

function deleteField (event) {
    const span = event.currentTarget;

    const newUpload = document.querySelectorAll('.new-upload');

    if(newUpload.length <= 1) {
        // clean input value
        span.parentNode.children[0].value = "";
        return
    }

    // delete field
    span.parentNode.remove();
}

// switch yes or no
function toggleSelect(event) {
     // remove class .active
     document.querySelectorAll('.button-select button')
     .forEach( button => button.classList.remove('active'));
     /*This statement of function 'button => button.classList.remove('active')' is a shorthand of the arrow function '() => {}' 
     (wich is a shorthand of the type declaration 'function () {}'), it's possible to use
     that shorthand (argument => command) when it's used just one argument and just one line,
     one command.

     Other way to write the same function can be:
        (button) => {
            button.classList.remove('active')
        }
        
        or

        button => {
            button.classList.remove('active')
        }
        
        or
        
        function (button) {
            button.classList.remove('active')
        }
    */

    // get clicked button
    const button = event.currentTarget;

    // place active class .active
    button.classList.add('active');

    // update my hidden input with selected value
    const input = document.querySelector('[name="open-on-weekends"]');
    input.value = button.dataset.value;
}

function validate(event) {
    const lat = document.querySelector('input[name=lat]').value;
    const lng = document.querySelector('input[name=lng]').value;

    // check if lat and lng are filled
    if(lng && lat) {

    } else {
        event.preventDefault();
        alert("Marque um ponto no mapa");
    }
}