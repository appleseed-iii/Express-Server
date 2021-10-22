# Fetch Failure Tester

## install

```bash
yarn
```

## run the app with

```javascript
node index.js
```

## usage from a js console

### a succesful fetch

```javascript
var response = await fetch("http://localhost:3000", {
  method: "GET",
}).then(resp => {return resp.json()});
```

### an unsuccesful fetch

```javascript
var response = await fetch("http://localhost:3000/failure", {
  method: "GET",
}).then(resp => {
  // first handle the status
  if (!resp.ok) {
      throw Error(resp.statusText);
  }
  return resp;
}).then(resp => {
  // then handle the json response
  return resp.json()
});
console.log("this won't fire bc we didn't catch");
```

### catching that unsuccessful fetch v1

```javascript
try{
  var response = await fetch("http://localhost:3000/failure", {
    method: "GET",
  }).then(resp => {
    // first handle the status
    if (!resp.ok) {
        throw Error(resp.statusText);
    }
    return resp;
  }).then(resp => {
    // then handle the json response
    return resp.json()
  });
  console.log("this won't fire");
} catch (e) {
  console.log(e.message);
}
console.log("this fires because we caught");
```

### catching that unsuccessful fetch v2

```javascript
var response = await fetch("http://localhost:3000/failure", {
  method: "GET",
}).then(resp => {
  // first handle the status
  if (!resp.ok) {
      throw Error(resp.statusText);
  }
  return resp;
}).then(resp => {
  // then handle the json response
  return resp.json()
  console.log("this won't fire");
}).catch(error => {
  // also catch any other errors
  console.log(error);

});
console.log("this fires because we caught");
```
