function requestA() {
  fetch("http://localhost:3000/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A")
  });
}

function requestAB() {
  fetch("http://localhost:3000/a/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A")
  });
}

function requestAC() {
  fetch("http://localhost:3000/a/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A")
  });
}

function requestB() {
  fetch("http://localhost:3001/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B")
  });
}

function requestBA() {
  fetch("http://localhost:3001/b/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B")
  });
}

function requestBC() {
  fetch("http://localhost:3001/b/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B")
  });
}

function requestC() {
  fetch("http://localhost:3002/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C")
  });
}

function requestCA() {
  fetch("http://localhost:3002/c/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C")
  });
}

function requestCB() {
  fetch("http://localhost:3002/c/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C")
  });
}