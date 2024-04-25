// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
    return fetch ("https://jsonplaceholder.typicode.com/users");
  }
  
  const handleRespose = (respose) => {
    return respose.json();
  }
  
  const newUsers = (users) =>{
    const newUsers = users.map(user => user.name);
    console.log(newUsers);
  }
  
  getUsers().then(handleRespose).then(newUsers);
  