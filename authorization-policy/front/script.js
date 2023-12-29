function requestA() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-a/a")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP A");
    });
}

function requestAB() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-a/a/b")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP A with APP B");
    });
}

function requestAC() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-a/a/c")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP A with APP C");
    });
}

function requestB() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-b/b")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP B");
    });
}

function requestBA() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-b/b/a")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP B with APP A");
    });
}

function requestBC() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-b/b/c")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP B with APP C");
    });
}

function requestC() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-c/c")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP C");
    });
}

function requestCA() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-c/c/a")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP C with APP A");
    });
}

function requestCB() {
  fetch("https://authorization-policy.poc-istio.local/gateway/app-c/c/b")
    .then(async (response) => {
      const data = await response.json();
      alert(data.message);
    })
    .catch(() => {
      alert("Error communicating with APP C with APP B");
    });
}
