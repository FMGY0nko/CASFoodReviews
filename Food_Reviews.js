let x = 0;
let temp = "";

const ids = ['p1', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'f1', 'f2', 'f3', 'MS', 'ME', 'CU'];

function show(ido) {
    if (x == 0) {
        for (i in ids) {
            if (ids[i] !== ido) {
                document.getElementById(ids[i]).style.display = "none";
            }
        }
        document.getElementById("prev").style.display = "none";
        document.getElementById(ido).style.display = "block";
        temp = ido;
        x = 1;
    } else {
        if (temp == ido) {
            for (i in ids) {
                document.getElementById(ids[i]).style.display = "none";
            }
            document.getElementById("prev").style.display = "block";
            x = 0;
        } else {
            document.getElementById(temp).style.display = "none";
            document.getElementById(ido).style.display = "block";
            temp = ido;
            x = 1;
        }
    }
}

function initMap(idr, la, ln) {
  const position = { lat: la, lng: ln };
  const map = new google.maps.Map(document.getElementById(idr), {
    zoom: 18,
    center: position,
  });
  const marker = new google.maps.Marker({
    position: position,
    map: map,
  });
}

function total(ido, idr, la, ln) {
    show(ido);
    initMap(idr, la, ln);
}
