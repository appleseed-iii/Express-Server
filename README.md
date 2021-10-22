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

```javascript
// # success
var response = await fetch("http://localhost:3000", {
  method: "GET",
}).then(resp => {return resp.json()});

// # uncaught failure
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

// # caught failure
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
  console.log("after");
} catch (e) {
  console.log(e.message);
}

// # caught failure v2
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
}).catch(error => {
  // also catch any other errors
  console.log(error);

});
console.log("after");
```
