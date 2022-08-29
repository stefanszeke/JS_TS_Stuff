{ 
var employeeId = 'outside';
  function foo(){
    console.log(typeof employeeId);
    employeeId = 'inside';
    return;
  }
  foo();
  console.log(employeeId);
  console.log(typeof employeeId);
}

{
  var employeeId = 'outside';
  function foo(){
    console.log(typeof employeeId);
    console.log(employeeId);
    employeeId = 'inside';
    console.log(employeeId);
    return;
    
    function employeeId() {}
  }
  foo();
  console.log(employeeId);
  
}

/// var
{ 
  var a = 0;
  function foo(){
    console.log(a);
    var a = 9;
    console.log(a);
  }
  foo();
  console.log(a);
}

{ 
  var a = 0;
  function foo(){
    console.log(a);
    a = 9;
    console.log(a);
  }
  foo();
  console.log(a);
}



/// let
try { 
  let a = 0;
  function foo(){
    // console.log(a); // ReferenceError: a is not defined
    let a = 9;
    console.log(a);
  }
  foo();
  console.log(a);
} catch (e) { console.log(e) }

{ 
  let a = 0;
  function foo(){
    console.log(a);
    a = 9;
    console.log(a);
  }
  foo();
  console.log(a);
}




