function Student(props) {
  console.log(props.data);
  return (
    <div>
      {/* <h1>Hello {props.name}</h1> */}
     {
        props.data.map((item,index)=>(
            <div className="">
                <h1>Record - 0{index+1}</h1>
                <ul>
                    <li>First Name : {item.fname}</li>
                    <li>Last Name : {item.lname}</li>
                </ul>
            </div>
        ))
     }
    </div>
  );
}

export default Student;
