/*Types of data
    String ""
    Number 01
    Object {}
    Boolean true or false
    Array []
*/

//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({id, name, lat, lng}) {

  //create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img onclick="showPreview(event)" src="/images/arrow-white.svg"></img> </a>`
  );

  //create and add marker
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
    .on('click', function showPreview(event) {
      const marker = event.target;
    
      const name = marker.dataset.name;
      const about = marker.dataset.about;
    
      previewName = document.querySelector('div.preview h1');
      previewAbout = document.querySelector('div.preview p');
    
      previewNameText = document.createTextNode(name);
      previewAboutText = document.createTextNode(about);
    
      marker.style.visibility = "visible";
    
      console.log(marker.classList.item(1));
    
    });
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    console.log(span);

    addMarker(orphanage);
});