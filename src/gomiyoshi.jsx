const func =(props)=>{
    const email = props.email ;
    const title = props.title;
    const onchange = props.change;
    const value = props.value;
    const listItem = breeds.map((item) => <option value={item} key={item} >{item}</option>);
    return <select value={value} onChange={e => onchange(e.target.value)} >
      {listItem}
    </select>
  }
  export default func
  
