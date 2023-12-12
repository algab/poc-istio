function requestA() {
  fetch("http://localhost/app-a/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A")
  });
}

function requestAB() {
  fetch("http://localhost/app-a/a/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A")
  });
}

function requestAC() {
  fetch("http://localhost/app-a/a/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A")
  });
}

function requestB() {
  fetch("http://localhost/app-b/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B")
  });
}

function requestBA() {
  fetch("http://localhost/app-b/b/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B")
  });
}

function requestBC() {
  fetch("http://localhost/app-b/b/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B")
  });
}

function requestC() {
  fetch("http://localhost/app-c/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C")
  });
}

function requestCA() {
  fetch("http://localhost/app-c/c/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C")
  });
}

function requestCB() {
  fetch("http://localhost/app-c/c/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C")
  });
}