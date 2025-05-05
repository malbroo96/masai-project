const data = [
    { name: "Alice", department: "Engineering" },
    { name: "Bob", department: "Sales" },
    { name: "Charlie", department: "HR" }
  ]

  function getname(arr) {
    let output = [];
    for(let i=0 ; i<arr.length ; i++){
        output.push(arr[i].name)
    }
    return output
  }

  console.log(getname(data))