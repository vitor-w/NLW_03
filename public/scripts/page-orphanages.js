/*Types of data
    String ""
    Number 01
    Object {}
    Boolean true or false
    Array []
*/

//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)
.on('click', closePreview );

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
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"></img> </a>`
  );

  //create and add marker
  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
    .on('popupopen', () => {
      const span = document.querySelector(`span[data-id="${id}"]`);
      switchPreview(span);
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

const preview = document.querySelector('div .preview');

function openPreview () {
  preview.classList.remove("animate-up_more");
  preview.classList.add("animate-down");
}

function closePreview () {
  preview.classList.remove("animate-down");
  preview.classList.add("animate-up_more");
}

function switchPreview(span) {
  if(preview.classList[1] == "animate-up_more") {
    showPreviewInfo(span);
    openPreview();
    console.log("it`s up");
  }  else {
    closePreview();
    setTimeout(() => {
      showPreviewInfo(span);
      openPreview();
    },700);
  }

  console.log(preview.classList[1]);

}

function showPreviewInfo(span) {

  const marker = span;

  const name = marker.dataset.name;
  const about = marker.dataset.about;
  const images = marker.dataset.images;
  const image = images.split(",")[0];

  previewImage = document.querySelector('div .preview .content_preview .image_preview > img');
  previewName = document.querySelector('div.preview h1');
  previewAbout = document.querySelector('div.preview p');

  previewName.innerHTML = '';
  previewAbout.innerHTML = '';
  previewImage.src = '';

  previewNameText = document.createTextNode(name);
  previewAboutText = document.createTextNode(about);

  previewImage.src = image;
  previewName.appendChild(previewNameText);
  previewAbout.appendChild(previewAboutText);

  //console.log(previewNameText);

}