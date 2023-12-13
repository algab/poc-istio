function requestA() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-a/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A")
  });
}

function requestAB() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-a/a/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A with APP B")
  });
}

function requestAC() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-a/a/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP A with APP C")
  });
}

function requestB() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-b/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B")
  });
}

function requestBA() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-b/b/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B with APP A")
  });
}

function requestBC() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-b/b/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP B with APP C")
  });
}

function requestC() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-c/c").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C")
  });
}

function requestCA() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-c/c/a").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C with APP A")
  });
}

function requestCB() {
  fetch("http://poc-istio-authorization-policy.localdomain/app-c/c/b").then(async (response) => {
    const data = await response.json();
    alert(data.message);
  }).catch(() => {
    alert("Error communicating with APP C with APP B")
  });
}