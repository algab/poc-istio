# PoC Istio

Proof of concept of Istio’s features. For this project, microk8s was used.

### Install MicroK8s

#### Linux

```
sudo snap install microk8s --classic
```

#### MacOS

```
brew install ubuntu/microk8s/microk8s
```

To install on Windows and get more information just go to the following website: https://microk8s.io

### Install mkcert

> mkcert is a simple tool for making locally-trusted development certificates. It requires no configuration.

#### Apply mkcert

```
mkcert -install
```

For more information: https://github.com/FiloSottile/mkcert

### Install addons

#### Metallb

```
microk8s enable metallb:10.64.140.43-10.64.140.49
```

#### Ingress

```
microk8s enable ingress
```

#### Istio

```
microk8s enable community
```

```
microk8s enable istio
```

### Apply manifests

#### Create the namespaces used in the project

```
kubectl apply -f k8s/namespace
```

#### Install Kiali

```
kubectl apply -f k8s/kiali
```
