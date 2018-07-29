var recipes = {
  sugar:"4",
  salt:"3"
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key,value) {
obj[key] = value
return obj
<<<<<<< HEAD
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign ({}, obj,{ [key]: value })
}

function deleteFromObjectByKey(obj,key){
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

=======
}
>>>>>>> 5fdb0f7cd9904692f4b1ae34ed877a270aaf97a5
